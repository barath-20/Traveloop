from typing import List
from sqlalchemy.orm import Session
from app.models.checklist import ChecklistItem
from app.models.note import TripNote
from app.schemas.checklist import ChecklistItemCreate, ChecklistItemUpdate
from app.schemas.note import TripNoteCreate, TripNoteUpdate
from uuid import UUID

# Checklist CRUD
def create_checklist_item(db: Session, item: ChecklistItemCreate, trip_id: UUID) -> ChecklistItem:
    db_item = ChecklistItem(**item.model_dump(), trip_id=trip_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def get_checklist_items(db: Session, trip_id: UUID) -> List[ChecklistItem]:
    return db.query(ChecklistItem).filter(ChecklistItem.trip_id == trip_id).all()

def get_checklist_item(db: Session, item_id: UUID) -> ChecklistItem:
    return db.query(ChecklistItem).filter(ChecklistItem.id == item_id).first()

def update_checklist_item(db: Session, db_item: ChecklistItem, item_in: ChecklistItemUpdate) -> ChecklistItem:
    update_data = item_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_item, field, value)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def delete_checklist_item(db: Session, item_id: UUID) -> None:
    db_item = get_checklist_item(db, item_id)
    if db_item:
        db.delete(db_item)
        db.commit()

# Note CRUD
def create_trip_note(db: Session, note: TripNoteCreate, trip_id: UUID) -> TripNote:
    db_note = TripNote(**note.model_dump(), trip_id=trip_id)
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note

def get_trip_notes(db: Session, trip_id: UUID) -> List[TripNote]:
    return db.query(TripNote).filter(TripNote.trip_id == trip_id).all()

def get_trip_note(db: Session, note_id: UUID) -> TripNote:
    return db.query(TripNote).filter(TripNote.id == note_id).first()

def update_trip_note(db: Session, db_note: TripNote, note_in: TripNoteUpdate) -> TripNote:
    update_data = note_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_note, field, value)
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note

def delete_trip_note(db: Session, note_id: UUID) -> None:
    db_note = get_trip_note(db, note_id)
    if db_note:
        db.delete(db_note)
        db.commit()
