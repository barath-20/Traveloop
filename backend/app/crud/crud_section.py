from typing import List
from sqlalchemy.orm import Session
from app.models.section import TripSection
from app.schemas.section import TripSectionCreate, TripSectionUpdate
from uuid import UUID

def create_section(db: Session, section: TripSectionCreate, trip_id: UUID) -> TripSection:
    db_section = TripSection(**section.model_dump(), trip_id=trip_id)
    db.add(db_section)
    db.commit()
    db.refresh(db_section)
    return db_section

def get_sections_by_trip(db: Session, trip_id: UUID) -> List[TripSection]:
    return db.query(TripSection).filter(TripSection.trip_id == trip_id).order_by(TripSection.order_index).all()

def get_section(db: Session, section_id: UUID) -> TripSection:
    return db.query(TripSection).filter(TripSection.id == section_id).first()

def update_section(db: Session, db_section: TripSection, section_in: TripSectionUpdate) -> TripSection:
    update_data = section_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_section, field, value)
    db.add(db_section)
    db.commit()
    db.refresh(db_section)
    return db_section

def delete_section(db: Session, section_id: UUID) -> None:
    db_section = db.query(TripSection).filter(TripSection.id == section_id).first()
    if db_section:
        db.delete(db_section)
        db.commit()
