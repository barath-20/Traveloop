from typing import List, Optional
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.api import deps
from app.models.user import User
from app.schemas.activity import ActivityResponse, TripActivityCreate, TripActivityUpdate, TripActivityResponse
from app.crud import crud_activity, crud_trip

router_sys = APIRouter()
router_trip = APIRouter()

# System Catalog Activities
@router_sys.get("/", response_model=dict)
def get_activities(
    q: Optional[str] = None,
    type: Optional[str] = None,
    city: Optional[str] = None,
    country: Optional[str] = None,
    max_cost: Optional[float] = None,
    min_duration: Optional[float] = None,
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    skip = (page - 1) * limit
    activities = crud_activity.get_activities(db, query=q, skip=skip, limit=limit)
    total = len(activities) # Just mock total for now
    formatted = [ActivityResponse.model_validate(a) for a in activities]
    return {"activities": formatted, "total": total}

@router_sys.get("/{activity_id}", response_model=dict)
def get_activity(
    activity_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    activity = crud_activity.get_activity(db, activity_id)
    if not activity:
        raise HTTPException(status_code=404, detail="Activity not found")
    return {"activity": ActivityResponse.model_validate(activity)}

# Trip Specific Activities
@router_trip.get("/{trip_id}/activities", response_model=dict)
def get_trip_activities(
    trip_id: UUID,
    section_id: Optional[UUID] = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id and not trip.is_public:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    trip_activities = crud_activity.get_trip_activities(db, trip_id, section_id)
    formatted = [TripActivityResponse.model_validate(ta) for ta in trip_activities]
    return {"trip_activities": formatted}

@router_trip.post("/{trip_id}/activities", response_model=dict, status_code=status.HTTP_201_CREATED)
def add_trip_activity(
    trip_id: UUID,
    activity_in: TripActivityCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    trip_activity = crud_activity.create_trip_activity(db, activity_in, trip_id)
    return {"trip_activity": TripActivityResponse.model_validate(trip_activity)}

@router_trip.put("/{trip_id}/activities/{ta_id}", response_model=dict)
def update_trip_activity(
    trip_id: UUID,
    ta_id: UUID,
    activity_in: TripActivityUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    ta = crud_activity.get_trip_activity(db, ta_id)
    if not ta or ta.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Trip Activity not found")
        
    updated_ta = crud_activity.update_trip_activity(db, ta, activity_in)
    return {"trip_activity": TripActivityResponse.model_validate(updated_ta)}

@router_trip.delete("/{trip_id}/activities/{ta_id}")
def delete_trip_activity(
    trip_id: UUID,
    ta_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip or trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    ta = crud_activity.get_trip_activity(db, ta_id)
    if not ta or ta.trip_id != trip_id:
        raise HTTPException(status_code=404, detail="Trip Activity not found")
        
    crud_activity.delete_trip_activity(db, ta_id)
    return {"message": "Removed"}
