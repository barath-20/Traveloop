from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.api import deps
from app.models.user import User
from app.schemas.user import UserResponse, UserUpdate
from app.crud import crud_user
import uuid

router = APIRouter()

@router.get("/me", response_model=UserResponse)
def read_user_me(
    current_user: User = Depends(deps.get_current_user)
):
    return current_user

@router.put("/me", response_model=UserResponse)
def update_user_me(
    user_in: UserUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    return crud_user.update_user(db, current_user, user_in)

from app.schemas.user_destination import UserDestinationCreate, UserDestinationResponse
from app.crud import crud_user_destination

@router.get("/me/saved-destinations", response_model=List[UserDestinationResponse])
def get_my_saved_destinations(
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    return crud_user_destination.get_saved_destinations(db, current_user.id)

@router.post("/me/saved-destinations", response_model=UserDestinationResponse)
def save_destination(
    obj_in: UserDestinationCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    return crud_user_destination.create_saved_destination(db, obj_in, current_user.id)

@router.delete("/me/saved-destinations/{saved_id}")
def remove_saved_destination(
    saved_id: uuid.UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    obj = crud_user_destination.delete_saved_destination(db, saved_id, current_user.id)
    if not obj:
        raise HTTPException(status_code=404, detail="Saved destination not found")
    return {"message": "Removed from wishlist"}

