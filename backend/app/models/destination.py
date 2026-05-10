from sqlalchemy import Column, String, Text, Numeric
from app.models.base import BaseModel

class Destination(BaseModel):
    __tablename__ = "destinations"

    name = Column(String(100), nullable=False)
    country = Column(String(100), nullable=False)
    region = Column(String(100), nullable=True) # E.g., Europe, Asia
    description = Column(Text, nullable=True)
    image_url = Column(String(255), nullable=True)
    latitude = Column(Numeric(10, 8), nullable=True)
    longitude = Column(Numeric(11, 8), nullable=True)
    best_time_to_visit = Column(String(100), nullable=True)
