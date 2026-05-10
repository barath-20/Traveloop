from typing import List
from sqlalchemy.orm import Session
from app.models.activity import Activity, TripActivity
from app.schemas.activity import TripActivityCreate, TripActivityUpdate
from uuid import UUID

# For System Activities
def get_activities(db: Session, query: str = None, skip: int = 0, limit: int = 20) -> List[Activity]:
    q = db.query(Activity)
    if query:
        q = q.filter(Activity.name.ilike(f"%{query}%"))
    return q.offset(skip).limit(limit).all()

def get_activity(db: Session, activity_id: UUID) -> Activity:
    return db.query(Activity).filter(Activity.id == activity_id).first()

# For Trip Activities
def create_trip_activity(db: Session, trip_activity: TripActivityCreate, trip_id: UUID) -> TripActivity:
    db_activity = TripActivity(**trip_activity.model_dump(), trip_id=trip_id)
    db.add(db_activity)
    db.commit()
    db.refresh(db_activity)
    return db_activity

def get_trip_activities(db: Session, trip_id: UUID, section_id: UUID = None) -> List[TripActivity]:
    q = db.query(TripActivity).filter(TripActivity.trip_id == trip_id)
    if section_id:
        q = q.filter(TripActivity.section_id == section_id)
    return q.all()

def get_trip_activity(db: Session, trip_activity_id: UUID) -> TripActivity:
    return db.query(TripActivity).filter(TripActivity.id == trip_activity_id).first()

def update_trip_activity(db: Session, db_trip_activity: TripActivity, trip_activity_in: TripActivityUpdate) -> TripActivity:
    update_data = trip_activity_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_trip_activity, field, value)
    db.add(db_trip_activity)
    db.commit()
    db.refresh(db_trip_activity)
    return db_trip_activity

def delete_trip_activity(db: Session, trip_activity_id: UUID) -> None:
    db_trip_activity = db.query(TripActivity).filter(TripActivity.id == trip_activity_id).first()
    if db_trip_activity:
        db.delete(db_trip_activity)
        db.commit()
