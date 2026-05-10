from sqlalchemy import Column, String, Boolean, Date, ForeignKey, Text, Numeric
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class Trip(BaseModel):
    __tablename__ = "trips"

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    name = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    cover_image_url = Column(Text, nullable=True)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    total_budget = Column(Numeric(12, 2), nullable=True)
    is_public = Column(Boolean, default=False)
    cloned_from = Column(UUID(as_uuid=True), ForeignKey("trips.id"), nullable=True)

    # We will add relationships later when we create Sections, Activities, etc.
    # user = relationship("User", back_populates="trips")
