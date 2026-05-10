from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.api import deps
from app.models.user import User
from app.schemas.destination import DestinationCreate, DestinationUpdate, DestinationResponse
from app.crud import crud_destination

router = APIRouter()

@router.get("/", response_model=dict)
def get_destinations(
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db)
):
    skip = (page - 1) * limit
    destinations, total = crud_destination.get_destinations(db, skip, limit)
    
    formatted = [DestinationResponse.model_validate(d) for d in destinations]
    return {
        "destinations": formatted,
        "total": total,
        "page": page
    }

@router.post("/", response_model=DestinationResponse, status_code=status.HTTP_201_CREATED)
def create_destination(
    destination_in: DestinationCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user) # Only admin should create in real app, keeping simple for now
):
    return crud_destination.create_destination(db, destination_in)

@router.get("/{destination_id}", response_model=DestinationResponse)
def get_destination(
    destination_id: UUID,
    db: Session = Depends(get_db)
):
    destination = crud_destination.get_destination(db, destination_id)
    if not destination:
        raise HTTPException(status_code=404, detail="Destination not found")
    return destination

@router.put("/{destination_id}", response_model=DestinationResponse)
def update_destination(
    destination_id: UUID,
    destination_in: DestinationUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    destination = crud_destination.get_destination(db, destination_id)
    if not destination:
        raise HTTPException(status_code=404, detail="Destination not found")
    return crud_destination.update_destination(db, destination, destination_in)

@router.delete("/{destination_id}")
def delete_destination(
    destination_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    destination = crud_destination.get_destination(db, destination_id)
    if not destination:
        raise HTTPException(status_code=404, detail="Destination not found")
    crud_destination.delete_destination(db, destination_id)
    return {"message": "Deleted"}
