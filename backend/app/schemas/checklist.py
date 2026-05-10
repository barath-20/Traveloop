from typing import Optional
from uuid import UUID
from pydantic import BaseModel, ConfigDict

class ChecklistItemBase(BaseModel):
    title: str
    is_completed: Optional[bool] = False
    category: Optional[str] = None

class ChecklistItemCreate(ChecklistItemBase):
    pass

class ChecklistItemUpdate(BaseModel):
    title: Optional[str] = None
    is_completed: Optional[bool] = None
    category: Optional[str] = None

class ChecklistItemInDBBase(ChecklistItemBase):
    id: UUID
    trip_id: UUID

    model_config = ConfigDict(from_attributes=True)

class ChecklistItemResponse(ChecklistItemInDBBase):
    pass
