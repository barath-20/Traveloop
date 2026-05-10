from typing import Optional, List
from uuid import UUID
from datetime import date, time
from pydantic import BaseModel, ConfigDict
from decimal import Decimal

class ActivityBase(BaseModel):
    name: str
    type: Optional[str] = None
    city: Optional[str] = None
    country: Optional[str] = None
    description: Optional[str] = None
    estimated_cost: Optional[Decimal] = None
    duration_hours: Optional[Decimal] = None
    image_url: Optional[str] = None
    is_system: Optional[bool] = True

class ActivityInDBBase(ActivityBase):
    id: UUID

    model_config = ConfigDict(from_attributes=True)

class ActivityResponse(ActivityInDBBase):
    pass

class TripActivityBase(BaseModel):
    activity_id: UUID
    section_id: Optional[UUID] = None
    scheduled_date: Optional[date] = None
    scheduled_time: Optional[time] = None
    actual_cost: Optional[Decimal] = None
    notes: Optional[str] = None

class TripActivityCreate(TripActivityBase):
    pass

class TripActivityUpdate(BaseModel):
    activity_id: Optional[UUID] = None
    section_id: Optional[UUID] = None
    scheduled_date: Optional[date] = None
    scheduled_time: Optional[time] = None
    actual_cost: Optional[Decimal] = None
    notes: Optional[str] = None

class TripActivityInDBBase(TripActivityBase):
    id: UUID
    trip_id: UUID

    model_config = ConfigDict(from_attributes=True)

class TripActivityResponse(TripActivityInDBBase):
    pass

class SectionWithActivities(BaseModel):
    section: "TripSectionResponse"
    activities: List[TripActivityResponse]

from app.schemas.section import TripSectionResponse
SectionWithActivities.model_rebuild()
