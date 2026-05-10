from typing import List
from uuid import UUID
from sqlalchemy.orm import Session
from app.models.user_destination import UserDestination
from app.schemas.user_destination import UserDestinationCreate

def get_saved_destinations(db: Session, user_id: UUID) -> List[UserDestination]:
    return db.query(UserDestination).filter(UserDestination.user_id == user_id).all()

def create_saved_destination(db: Session, obj_in: UserDestinationCreate, user_id: UUID) -> UserDestination:
    db_obj = UserDestination(
        destination_id=obj_in.destination_id,
        notes=obj_in.notes,
        user_id=user_id
    )
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj

def delete_saved_destination(db: Session, id: UUID, user_id: UUID):
    obj = db.query(UserDestination).filter(UserDestination.id == id, UserDestination.user_id == user_id).first()
    if obj:
        db.delete(obj)
        db.commit()
    return obj
