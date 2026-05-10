from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.api import deps
from app.models.user import User
from app.schemas.checklist import ChecklistItemCreate, ChecklistItemUpdate, ChecklistItemResponse
from app.schemas.note import TripNoteCreate, TripNoteUpdate, TripNoteResponse
from app.crud import crud_extra, crud_trip

router = APIRouter()

# Checklist Endpoints
@router.get("/{trip_id}/checklist", response_model=List[ChecklistItemResponse])
def get_checklist(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id and not trip.is_public:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return crud_extra.get_checklist_items(db, trip_id)

@router.post("/{trip_id}/checklist", response_model=ChecklistItemResponse, status_code=status.HTTP_201_CREATED)
def add_checklist_item(
    trip_id: UUID,
    item_in: ChecklistItemCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return crud_extra.create_checklist_item(db, item_in, trip_id)

@router.put("/{trip_id}/checklist/{item_id}", response_model=ChecklistItemResponse)
def update_checklist_item(
    trip_id: UUID,
    item_id: UUID,
    item_in: ChecklistItemUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    item = crud_extra.get_checklist_item(db, item_id)
    if not item or item.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Checklist item not found")
    return crud_extra.update_checklist_item(db, item, item_in)

@router.delete("/{trip_id}/checklist/{item_id}")
def delete_checklist_item(
    trip_id: UUID,
    item_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    item = crud_extra.get_checklist_item(db, item_id)
    if not item or item.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Checklist item not found")
    crud_extra.delete_checklist_item(db, item_id)
    return {"message": "Deleted"}

@router.post("/{trip_id}/checklist/reset")
def reset_checklist(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    items = crud_extra.get_checklist_items(db, trip_id)
    for item in items:
        item.is_packed = False
    db.commit()
    return {"message": "Checklist reset successfully"}


# Note Endpoints
@router.get("/{trip_id}/notes", response_model=List[TripNoteResponse])
def get_notes(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id and not trip.is_public:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return crud_extra.get_trip_notes(db, trip_id)

@router.post("/{trip_id}/notes", response_model=TripNoteResponse, status_code=status.HTTP_201_CREATED)
def add_note(
    trip_id: UUID,
    note_in: TripNoteCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return crud_extra.create_trip_note(db, note_in, trip_id)

@router.put("/{trip_id}/notes/{note_id}", response_model=TripNoteResponse)
def update_note(
    trip_id: UUID,
    note_id: UUID,
    note_in: TripNoteUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    note = crud_extra.get_trip_note(db, note_id)
    if not note or note.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Note not found")
    return crud_extra.update_trip_note(db, note, note_in)

@router.delete("/{trip_id}/notes/{note_id}")
def delete_note(
    trip_id: UUID,
    note_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    note = crud_extra.get_trip_note(db, note_id)
    if not note or note.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Note not found")
    crud_extra.delete_trip_note(db, note_id)
    return {"message": "Deleted"}
