from typing import Optional
from uuid import UUID
from pydantic import BaseModel, ConfigDict

class UserDestinationBase(BaseModel):
    destination_id: UUID
    notes: Optional[str] = None

class UserDestinationCreate(UserDestinationBase):
    pass

class UserDestinationResponse(UserDestinationBase):
    id: UUID
    user_id: UUID
    
    model_config = ConfigDict(from_attributes=True)
