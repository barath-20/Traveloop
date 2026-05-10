from datetime import date
from typing import List, Tuple
from sqlalchemy.orm import Session
from app.models.trip import Trip
from app.schemas.trip import TripCreate, TripUpdate
from uuid import UUID

def create_trip(db: Session, trip: TripCreate, user_id: UUID) -> Trip:
    db_trip = Trip(
        **trip.model_dump(),
        user_id=user_id
    )
    db.add(db_trip)
    db.commit()
    db.refresh(db_trip)
    return db_trip

def get_trip(db: Session, trip_id: UUID) -> Trip:
    return db.query(Trip).filter(Trip.id == trip_id).first()

def get_multi_by_user(
    db: Session, user_id: UUID, status: str = None, skip: int = 0, limit: int = 20
) -> Tuple[List[Trip], int]:
    query = db.query(Trip).filter(Trip.user_id == user_id)
    
    # Filter by computed status
    today = date.today()
    if status == "upcoming":
        query = query.filter(Trip.start_date > today)
    elif status == "ongoing":
        query = query.filter(Trip.start_date <= today, Trip.end_date >= today)
    elif status == "completed":
        query = query.filter(Trip.end_date < today)
        
    total = query.count()
    trips = query.offset(skip).limit(limit).all()
    return trips, total

def update_trip(db: Session, db_trip: Trip, trip_in: TripUpdate) -> Trip:
    update_data = trip_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_trip, field, value)
    db.add(db_trip)
    db.commit()
    db.refresh(db_trip)
    return db_trip

def delete_trip(db: Session, trip_id: UUID) -> None:
    db_trip = db.query(Trip).filter(Trip.id == trip_id).first()
    if db_trip:
        db.delete(db_trip)
        db.commit()
