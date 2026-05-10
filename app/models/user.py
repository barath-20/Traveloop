from sqlalchemy import Column, String, Boolean, Enum
from app.models.base import BaseModel

class User(BaseModel):
    __tablename__ = "users"

    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    phone = Column(String(30), nullable=True)
    city = Column(String(100), nullable=True)
    country = Column(String(100), nullable=True)
    avatar_url = Column(String, nullable=True)
    bio = Column(String, nullable=True)
    language_pref = Column(String(10), default="en")
    role = Column(Enum('user', 'admin', name='user_roles'), default='user')
    is_active = Column(Boolean, default=True)
