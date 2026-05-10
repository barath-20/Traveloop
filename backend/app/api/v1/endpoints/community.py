from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.core.database import get_db
from app.api import deps
from app.models.user import User
from app.models.trip import Trip
from app.models.section import TripSection
from app.models.activity import TripActivity
from app.models.expense import Expense
from app.models.checklist import ChecklistItem
from app.models.note import TripNote
from app.schemas.trip import TripResponse, TripCreate
from app.crud import crud_trip

router = APIRouter()

# Community Endpoints
@router.get("/feed", response_model=dict)
def get_community_feed(
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db)
):
    skip = (page - 1) * limit
    q = db.query(Trip).filter(Trip.is_public == True)
    total = q.count()
    trips = q.order_by(Trip.created_at.desc()).offset(skip).limit(limit).all()
    
    return {
        "items": [TripResponse.model_validate(t) for t in trips],
        "total": total,
        "page": page
    }

@router.post("/{trip_id}/clone", response_model=TripResponse, status_code=status.HTTP_201_CREATED)
def clone_trip(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    original_trip = db.query(Trip).filter(Trip.id == trip_id).first()
    if not original_trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if not original_trip.is_public and original_trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Cannot clone private trip")
    
    # Clone Trip
    new_trip = Trip(
        title=f"Copy of {original_trip.title}",
        description=original_trip.description,
        start_date=original_trip.start_date,
        end_date=original_trip.end_date,
        total_budget=original_trip.total_budget,
        user_id=current_user.id,
        is_public=False
    )
    db.add(new_trip)
    db.commit()
    db.refresh(new_trip)
    
    # Clone Sections and Activities
    sections = db.query(TripSection).filter(TripSection.trip_id == original_trip.id).all()
    for sec in sections:
        new_sec = TripSection(
            trip_id=new_trip.id,
            title=sec.title,
            description=sec.description,
            order=sec.order
        )
        db.add(new_sec)
        db.commit()
        db.refresh(new_sec)
        
        activities = db.query(TripActivity).filter(TripActivity.section_id == sec.id).all()
        for act in activities:
            new_act = TripActivity(
                trip_id=new_trip.id,
                section_id=new_sec.id,
                activity_id=act.activity_id,
                title=act.title,
                description=act.description,
                start_time=act.start_time,
                end_time=act.end_time,
                location=act.location,
                notes=act.notes
            )
            db.add(new_act)
            
    # Clone Expenses
    expenses = db.query(Expense).filter(Expense.trip_id == original_trip.id).all()
    for exp in expenses:
        new_exp = Expense(
            trip_id=new_trip.id,
            category=exp.category,
            description=exp.description,
            quantity=exp.quantity,
            unit_cost=exp.unit_cost,
            is_paid=False,
            payment_status="pending"
        )
        db.add(new_exp)
        
    # Clone Checklist Items
    checklist = db.query(ChecklistItem).filter(ChecklistItem.trip_id == original_trip.id).all()
    for item in checklist:
        new_item = ChecklistItem(
            trip_id=new_trip.id,
            title=item.title,
            is_completed=False,
            category=item.category
        )
        db.add(new_item)
        
    # Clone Notes
    notes = db.query(TripNote).filter(TripNote.trip_id == original_trip.id).all()
    for note in notes:
        new_note = TripNote(
            trip_id=new_trip.id,
            title=note.title,
            content=note.content,
            category=note.category
        )
        db.add(new_note)
        
    db.commit()
    db.refresh(new_trip)
    return new_trip

# Admin Endpoints (Phase 8)
@router.get("/admin/stats", response_model=dict)
def get_admin_stats(
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    user_count = db.query(User).count()
    trip_count = db.query(Trip).count()
    public_trip_count = db.query(Trip).filter(Trip.is_public == True).count()
    total_expense_sum = db.query(func.sum(Expense.unit_cost * Expense.quantity)).scalar() or 0
    
    return {
        "users": user_count,
        "trips": trip_count,
        "public_trips": public_trip_count,
        "total_expenses_value": total_expense_sum
    }
