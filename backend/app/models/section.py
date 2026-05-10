from sqlalchemy import Column, String, Date, ForeignKey, Text, Numeric, Integer
from sqlalchemy.dialects.postgresql import UUID
from app.models.base import BaseModel

class TripSection(BaseModel):
    __tablename__ = "trip_sections"

    trip_id = Column(UUID(as_uuid=True), ForeignKey("trips.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    budget = Column(Numeric(12, 2), nullable=True)
    order_index = Column(Integer, nullable=False, default=0)
