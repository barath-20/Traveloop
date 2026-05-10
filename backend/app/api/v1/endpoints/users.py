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

@router.post("/upload", response_model=dict)
def mock_upload_file(
    file: UploadFile = File(...),
    current_user: User = Depends(deps.get_current_user)
):
    # Mocking S3 upload
    # In a real app, you'd upload to S3 and get back a URL
    file_id = str(uuid.uuid4())
    mock_url = f"https://traveloop-media.s3.amazonaws.com/{file_id}-{file.filename}"
    
    return {
        "filename": file.filename,
        "url": mock_url,
        "content_type": file.content_type
    }
