from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.api import deps
from app.models.user import User
from app.schemas.section import TripSectionCreate, TripSectionUpdate, TripSectionResponse
from app.crud import crud_section, crud_trip

router = APIRouter()

@router.get("/{trip_id}/sections", response_model=List[TripSectionResponse])
def get_sections(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id and not trip.is_public:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    return crud_section.get_sections_by_trip(db, trip_id)

@router.post("/{trip_id}/sections", response_model=TripSectionResponse, status_code=status.HTTP_201_CREATED)
def create_section(
    trip_id: UUID,
    section_in: TripSectionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    return crud_section.create_section(db, section_in, trip_id)

@router.put("/{trip_id}/sections/{section_id}", response_model=TripSectionResponse)
def update_section(
    trip_id: UUID,
    section_id: UUID,
    section_in: TripSectionUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    section = crud_section.get_section(db, section_id)
    if not section or section.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Section not found")
        
    return crud_section.update_section(db, section, section_in)

@router.delete("/{trip_id}/sections/{section_id}")
def delete_section(
    trip_id: UUID,
    section_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    section = crud_section.get_section(db, section_id)
    if not section or section.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Section not found")
        
    crud_section.delete_section(db, section_id)
    return {"message": "Section deleted"}
