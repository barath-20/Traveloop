from typing import List, Optional
from uuid import UUID
from decimal import Decimal
from fastapi import APIRouter, Depends, HTTPException, status, Query, Response
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.api import deps
from app.models.user import User
from app.schemas.expense import ExpenseCreate, ExpenseUpdate, ExpenseResponse
from app.crud import crud_expense, crud_trip

router = APIRouter()

@router.get("/{trip_id}/expenses", response_model=dict)
def get_expenses(
    trip_id: UUID,
    category: Optional[str] = None,
    section_id: Optional[UUID] = None,
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id and not trip.is_public:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    skip = (page - 1) * limit
    expenses, total = crud_expense.get_expenses_by_trip(db, trip_id, category, section_id, skip, limit)
    
    # Calculate subtotals and grand total based on ALL trip expenses
    all_expenses = crud_expense.get_all_trip_expenses(db, trip_id)
    grand_total = sum(e.amount for e in all_expenses)
    
    subtotals = {}
    for e in all_expenses:
        if e.category not in subtotals:
            subtotals[e.category] = Decimal("0.00")
        subtotals[e.category] += e.amount
        
    formatted = [ExpenseResponse.model_validate(e) for e in expenses]
    return {
        "expenses": formatted,
        "subtotals": subtotals,
        "grand_total": grand_total,
        "total": total,
        "page": page
    }

@router.post("/{trip_id}/expenses", response_model=dict, status_code=status.HTTP_201_CREATED)
def add_expense(
    trip_id: UUID,
    expense_in: ExpenseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    expense = crud_expense.create_expense(db, expense_in, trip_id)
    return {"expense": ExpenseResponse.model_validate(expense)}

@router.put("/{trip_id}/expenses/{expense_id}", response_model=dict)
def update_expense(
    trip_id: UUID,
    expense_id: UUID,
    expense_in: ExpenseUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    expense = crud_expense.get_expense(db, expense_id)
    if not expense or expense.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Expense not found")
        
    updated = crud_expense.update_expense(db, expense, expense_in)
    return {"expense": ExpenseResponse.model_validate(updated)}

@router.delete("/{trip_id}/expenses/{expense_id}")
def delete_expense(
    trip_id: UUID,
    expense_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    expense = crud_expense.get_expense(db, expense_id)
    if not expense or expense.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Expense not found")
        
    crud_expense.delete_expense(db, expense_id)
    return {"message": "Deleted"}

@router.get("/{trip_id}/budget-summary", response_model=dict)
def get_budget_summary(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id and not trip.is_public:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    all_expenses = crud_expense.get_all_trip_expenses(db, trip_id)
    total_spent = sum(e.amount for e in all_expenses)
    total_budget = trip.total_budget or Decimal("0.00")
    remaining = total_budget - total_spent
    
    breakdown_cat = {}
    breakdown_sec = {}
    for e in all_expenses:
        cat = e.category
        sec = str(e.section_id) if e.section_id else "unassigned"
        
        breakdown_cat[cat] = breakdown_cat.get(cat, Decimal("0.00")) + e.amount
        breakdown_sec[sec] = breakdown_sec.get(sec, Decimal("0.00")) + e.amount
        
    return {
        "total_budget": total_budget,
        "total_spent": total_spent,
        "remaining": remaining,
        "breakdown_by_category": breakdown_cat,
        "breakdown_by_section": breakdown_sec
    }

@router.get("/{trip_id}/invoice")
def download_invoice(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    # This is a placeholder for PDF generation
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    # Return a dummy binary file for now
    pdf_content = b"%PDF-1.4\n1 0 obj\n<< /Title (Invoice placeholder) >>\nendobj\n"
    return Response(content=pdf_content, media_type="application/pdf", headers={"Content-Disposition": f"attachment; filename=traveloop-invoice-{trip_id}.pdf"})
