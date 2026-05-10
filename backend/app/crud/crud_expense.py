from typing import List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.models.expense import Expense
from app.schemas.expense import ExpenseCreate, ExpenseUpdate
from uuid import UUID

def create_expense(db: Session, expense: ExpenseCreate, trip_id: UUID) -> Expense:
    db_expense = Expense(**expense.model_dump(), trip_id=trip_id)
    db.add(db_expense)
    db.commit()
    db.refresh(db_expense)
    return db_expense

def get_expenses_by_trip(
    db: Session, trip_id: UUID, category: str = None, section_id: UUID = None, skip: int = 0, limit: int = 20
) -> Tuple[List[Expense], int]:
    q = db.query(Expense).filter(Expense.trip_id == trip_id)
    if category:
        q = q.filter(Expense.category == category)
    if section_id:
        q = q.filter(Expense.section_id == section_id)
    
    total = q.count()
    expenses = q.offset(skip).limit(limit).all()
    return expenses, total

def get_expense(db: Session, expense_id: UUID) -> Expense:
    return db.query(Expense).filter(Expense.id == expense_id).first()

def update_expense(db: Session, db_expense: Expense, expense_in: ExpenseUpdate) -> Expense:
    update_data = expense_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_expense, field, value)
    db.add(db_expense)
    db.commit()
    db.refresh(db_expense)
    return db_expense

def delete_expense(db: Session, expense_id: UUID) -> None:
    db_expense = db.query(Expense).filter(Expense.id == expense_id).first()
    if db_expense:
        db.delete(db_expense)
        db.commit()

def get_all_trip_expenses(db: Session, trip_id: UUID) -> List[Expense]:
    return db.query(Expense).filter(Expense.trip_id == trip_id).all()
