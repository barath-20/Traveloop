from typing import Optional
from uuid import UUID
from pydantic import BaseModel, ConfigDict
from decimal import Decimal

class ExpenseBase(BaseModel):
    category: str
    description: Optional[str] = None
    quantity: Optional[Decimal] = 1.00
    unit_cost: Decimal
    section_id: Optional[UUID] = None
    is_paid: Optional[bool] = False
    payment_status: Optional[str] = "pending"

class ExpenseCreate(ExpenseBase):
    pass

class ExpenseUpdate(BaseModel):
    category: Optional[str] = None
    description: Optional[str] = None
    quantity: Optional[Decimal] = None
    unit_cost: Optional[Decimal] = None
    section_id: Optional[UUID] = None
    is_paid: Optional[bool] = None
    payment_status: Optional[str] = None

class ExpenseInDBBase(ExpenseBase):
    id: UUID
    trip_id: UUID
    amount: Decimal

    model_config = ConfigDict(from_attributes=True)

class ExpenseResponse(ExpenseInDBBase):
    pass
