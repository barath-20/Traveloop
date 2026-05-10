from typing import Optional, List
from uuid import UUID
from datetime import date
from pydantic import BaseModel, ConfigDict
from decimal import Decimal

class TripBase(BaseModel):
    name: str
    description: Optional[str] = None
    start_date: date
    end_date: date
    total_budget: Optional[Decimal] = None
    cover_image_url: Optional[str] = None
    is_public: Optional[bool] = False

class TripCreate(TripBase):
    pass

class TripUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    total_budget: Optional[Decimal] = None
    cover_image_url: Optional[str] = None
    is_public: Optional[bool] = None

class TripInDBBase(TripBase):
    id: UUID
    user_id: UUID
    cloned_from: Optional[UUID] = None
    status: Optional[str] = None # We will compute this
    
    model_config = ConfigDict(from_attributes=True)

class TripResponse(TripInDBBase):
    pass

class TripListResponse(BaseModel):
    trips: List[TripResponse]
    total: int
    page: int
