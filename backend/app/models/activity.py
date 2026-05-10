from sqlalchemy import Column, String, Boolean, Date, Time, ForeignKey, Text, Numeric
from sqlalchemy.dialects.postgresql import UUID
from app.models.base import BaseModel

class Activity(BaseModel):
    __tablename__ = "activities"

    name = Column(String(255), nullable=False)
    type = Column(String(100)) # sightseeing/food/adventure/etc
    city = Column(String(100))
    country = Column(String(100))
    description = Column(Text)
    estimated_cost = Column(Numeric(10, 2))
    duration_hours = Column(Numeric(5, 1))
    image_url = Column(Text)
    is_system = Column(Boolean, default=True)

class TripActivity(BaseModel):
    __tablename__ = "trip_activities"

    trip_id = Column(UUID(as_uuid=True), ForeignKey("trips.id", ondelete="CASCADE"), nullable=False)
    section_id = Column(UUID(as_uuid=True), ForeignKey("trip_sections.id", ondelete="SET NULL"), nullable=True)
    activity_id = Column(UUID(as_uuid=True), ForeignKey("activities.id", ondelete="CASCADE"), nullable=False)
    
    scheduled_date = Column(Date, nullable=True)
    scheduled_time = Column(Time, nullable=True)
    actual_cost = Column(Numeric(10, 2), nullable=True)
    notes = Column(Text, nullable=True)
