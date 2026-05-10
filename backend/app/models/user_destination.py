from sqlalchemy import Column, ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from app.models.base import BaseModel
import uuid

class UserDestination(BaseModel):
    __tablename__ = "user_destinations"

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    destination_id = Column(UUID(as_uuid=True), ForeignKey("destinations.id", ondelete="CASCADE"), nullable=False)
    notes = Column(String, nullable=True)

