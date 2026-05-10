from sqlalchemy import Column, String, Boolean, ForeignKey, Text, Numeric
from sqlalchemy.dialects.postgresql import UUID
from app.models.base import BaseModel

class Expense(BaseModel):
    __tablename__ = "expenses"

    trip_id = Column(UUID(as_uuid=True), ForeignKey("trips.id", ondelete="CASCADE"), nullable=False)
    section_id = Column(UUID(as_uuid=True), ForeignKey("trip_sections.id", ondelete="SET NULL"), nullable=True)
    category = Column(String(100), nullable=False) # hotel/flight/food/activity/other
    description = Column(Text, nullable=True)
    quantity = Column(Numeric(8, 2), default=1)
    unit_cost = Column(Numeric(10, 2), nullable=False)
    
    is_paid = Column(Boolean, default=False)
    payment_status = Column(String(50), default="pending") # pending/paid/cancelled
    
    @property
    def amount(self):
        return (self.quantity or 1) * (self.unit_cost or 0)
