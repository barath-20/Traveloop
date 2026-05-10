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

from io import BytesIO
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import LETTER
from reportlab.lib import colors

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
    
    # Check if overall trip is over budget
    is_over_budget = total_spent > total_budget
    
    breakdown_cat = {}
    breakdown_sec = {}
    for e in all_expenses:
        cat = e.category
        sec_id = str(e.section_id) if e.section_id else "unassigned"
        
        breakdown_cat[cat] = breakdown_cat.get(cat, Decimal("0.00")) + e.amount
        
        if sec_id not in breakdown_sec:
            breakdown_sec[sec_id] = {"total": Decimal("0.00"), "over_budget": False}
        breakdown_sec[sec_id]["total"] += e.amount
        
    # Check individual sections for budget alerts
    # Note: Sections have their own budget in the model
    from app.crud import crud_section
    sections = crud_section.get_sections(db, trip_id)
    for s in sections:
        sid = str(s.id)
        if sid in breakdown_sec:
            s_budget = s.budget or Decimal("0.00")
            if breakdown_sec[sid]["total"] > s_budget:
                breakdown_sec[sid]["over_budget"] = True

    return {
        "total_budget": total_budget,
        "total_spent": total_spent,
        "remaining": remaining,
        "is_over_budget": is_over_budget,
        "breakdown_by_category": breakdown_cat,
        "breakdown_by_section": breakdown_sec
    }

@router.get("/{trip_id}/invoice")
def download_invoice(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    all_expenses = crud_expense.get_all_trip_expenses(db, trip_id)
    total_spent = sum(e.amount for e in all_expenses)
    
    # Generate PDF in memory
    buffer = BytesIO()
    c = canvas.Canvas(buffer, pagesize=LETTER)
    width, height = LETTER

    # Header
    c.setFont("Helvetica-Bold", 24)
    c.drawString(50, height - 50, "Traveloop Trip Invoice")
    
    c.setFont("Helvetica", 12)
    c.drawString(50, height - 80, f"Trip Name: {trip.title}")
    c.drawString(50, height - 100, f"Owner: {current_user.full_name}")
    c.drawString(50, height - 120, f"Dates: {trip.start_date} to {trip.end_date}")
    
    # Table Header
    y = height - 160
    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, y, "Category")
    c.drawString(200, y, "Description")
    c.drawString(450, y, "Amount")
    c.line(50, y - 5, 550, y - 5)
    
    # Table Content
    y -= 25
    c.setFont("Helvetica", 10)
    for expense in all_expenses:
        if y < 50: # New page
            c.showPage()
            y = height - 50
            c.setFont("Helvetica", 10)
            
        c.drawString(50, y, str(expense.category))
        c.drawString(200, y, str(expense.description)[:40])
        c.drawString(450, y, f"${expense.amount:,.2f}")
        y -= 20
        
    # Footer
    y -= 20
    c.line(50, y + 15, 550, y + 15)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(350, y, "TOTAL SPENT:")
    c.drawString(450, y, f"${total_spent:,.2f}")
    
    c.setFont("Helvetica-Oblique", 10)
    c.drawString(50, 30, "Thank you for using Traveloop! Have a safe journey.")
    
    c.showPage()
    c.save()
    
    buffer.seek(0)
    return Response(
        content=buffer.getvalue(), 
        media_type="application/pdf", 
        headers={"Content-Disposition": f"attachment; filename=traveloop-invoice-{trip.title.replace(' ', '_')}.pdf"}
    )

