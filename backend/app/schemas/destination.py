from typing import Optional
from uuid import UUID
from pydantic import BaseModel, ConfigDict
from decimal import Decimal

class DestinationBase(BaseModel):
    name: str
    country: str
    region: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    latitude: Optional[Decimal] = None
    longitude: Optional[Decimal] = None
    best_time_to_visit: Optional[str] = None

class DestinationCreate(DestinationBase):
    pass

class DestinationUpdate(BaseModel):
    name: Optional[str] = None
    country: Optional[str] = None
    region: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    latitude: Optional[Decimal] = None
    longitude: Optional[Decimal] = None
    best_time_to_visit: Optional[str] = None

class DestinationInDBBase(DestinationBase):
    id: UUID

    model_config = ConfigDict(from_attributes=True)

class DestinationResponse(DestinationInDBBase):
    pass
