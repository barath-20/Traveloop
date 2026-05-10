from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
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
def login(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = crud_user.get_user_by_email(db, email=form_data.username)
    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    elif not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        subject=user.id, expires_delta=access_token_expires
    )
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": UserInDB.model_validate(user)
    }

# Mock in-memory storage for reset tokens (for dev/hackathon purposes)
reset_tokens = {}

@router.post("/forgot-password")
def forgot_password(email: str, db: Session = Depends(get_db)):
    user = crud_user.get_user_by_email(db, email=email)
    if not user:
        # Still return 200 to prevent email enumeration
        return {"message": "Reset email sent"}
    
    import secrets
    token = secrets.token_urlsafe(32)
    reset_tokens[token] = email
    
    return {
        "message": "Reset token generated (simulating email)",
        "reset_token": token,
        "instructions": "In a real app, this token would be emailed to you."
    }

@router.post("/reset-password")
def reset_password(token: str, new_password: str, db: Session = Depends(get_db)):
    email = reset_tokens.get(token)
    if not email:
        raise HTTPException(status_code=400, detail="Invalid or expired token")
    
    user = crud_user.get_user_by_email(db, email=email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Update password
    user.password_hash = get_password_hash(new_password)
    db.commit()
    
    # Remove token
    del reset_tokens[token]
    
    return {"message": "Password updated successfully"}


@router.post("/logout")
def logout():
    return {"message": "Logged out"}
