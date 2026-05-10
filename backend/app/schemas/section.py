from typing import Optional
from uuid import UUID
from datetime import date
from pydantic import BaseModel, ConfigDict
from decimal import Decimal

class TripSectionBase(BaseModel):
    title: str
    description: Optional[str] = None
    start_date: date
    end_date: date
    budget: Optional[Decimal] = None
    order_index: Optional[int] = 0

class TripSectionCreate(TripSectionBase):
    pass

class TripSectionUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    budget: Optional[Decimal] = None
    order_index: Optional[int] = None

class TripSectionInDBBase(TripSectionBase):
    id: UUID
    trip_id: UUID

    model_config = ConfigDict(from_attributes=True)

class TripSectionResponse(TripSectionInDBBase):
    pass
