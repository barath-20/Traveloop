from typing import Optional
from uuid import UUID
from pydantic import BaseModel, ConfigDict

class TripNoteBase(BaseModel):
    title: str
    content: Optional[str] = None
    category: Optional[str] = None

class TripNoteCreate(TripNoteBase):
    pass

class TripNoteUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None

class TripNoteInDBBase(TripNoteBase):
    id: UUID
    trip_id: UUID

    model_config = ConfigDict(from_attributes=True)

class TripNoteResponse(TripNoteInDBBase):
    pass
