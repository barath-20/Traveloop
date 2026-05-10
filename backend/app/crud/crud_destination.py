from typing import List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.models.destination import Destination
from app.schemas.destination import DestinationCreate, DestinationUpdate
from uuid import UUID

def create_destination(db: Session, destination: DestinationCreate) -> Destination:
    db_destination = Destination(**destination.model_dump())
    db.add(db_destination)
    db.commit()
    db.refresh(db_destination)
    return db_destination

def get_destination(db: Session, destination_id: UUID) -> Destination:
    return db.query(Destination).filter(Destination.id == destination_id).first()

def get_destinations(db: Session, skip: int = 0, limit: int = 20) -> Tuple[List[Destination], int]:
    q = db.query(Destination)
    return q.offset(skip).limit(limit).all(), q.count()

def update_destination(db: Session, db_destination: Destination, destination_in: DestinationUpdate) -> Destination:
    update_data = destination_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_destination, field, value)
    db.add(db_destination)
    db.commit()
    db.refresh(db_destination)
    return db_destination

def delete_destination(db: Session, destination_id: UUID) -> None:
    db_destination = get_destination(db, destination_id)
    if db_destination:
        db.delete(db_destination)
        db.commit()

def search_destinations(db: Session, query: str, skip: int = 0, limit: int = 20) -> Tuple[List[Destination], int]:
    q = db.query(Destination).filter(
        or_(
            Destination.name.ilike(f"%{query}%"),
            Destination.country.ilike(f"%{query}%"),
            Destination.region.ilike(f"%{query}%"),
            Destination.description.ilike(f"%{query}%")
        )
    )
    return q.offset(skip).limit(limit).all(), q.count()
