from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.security import verify_password, create_access_token
from app.core.config import settings
from app.schemas.user import UserCreate, UserInDB, UserLogin
from app.crud import crud_user

router = APIRouter()

@router.post("/register", response_model=dict, status_code=status.HTTP_201_CREATED)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    user = crud_user.get_user_by_email(db, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=409,
            detail="The user with this username already exists in the system.",
        )
    user = crud_user.create_user(db, user=user_in)
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        subject=user.id, expires_delta=access_token_expires
    )
    return {"user": UserInDB.model_validate(user), "token": access_token}

@router.post("/login", response_model=dict)
def login(login_data: UserLogin, db: Session = Depends(get_db)):
    user = crud_user.get_user_by_email(db, email=login_data.email)
    if not user or not verify_password(login_data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    elif not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        subject=user.id, expires_delta=access_token_expires
    )
    return {"user": UserInDB.model_validate(user), "token": access_token}

@router.post("/forgot-password")
def forgot_password(email: str, db: Session = Depends(get_db)):
    # Always return 200 to prevent email enumeration
    return {"message": "Reset email sent"}

@router.post("/reset-password")
def reset_password(token: str, new_password: str, db: Session = Depends(get_db)):
    # Mock implementation
    return {"message": "Password updated"}

@router.post("/logout")
def logout():
    return {"message": "Logged out"}
