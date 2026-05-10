from typing import Optional
from uuid import UUID
from datetime import date
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.api import deps
from app.models.user import User
from app.schemas.trip import TripCreate, TripUpdate, TripResponse, TripListResponse
from app.crud import crud_trip

router = APIRouter()

def compute_trip_status(trip) -> str:
    today = date.today()
    if trip.start_date > today:
        return "upcoming"
    elif trip.end_date < today:
        return "completed"
    else:
        return "ongoing"

def format_trip(trip) -> TripResponse:
    trip_data = trip.__dict__.copy()
    trip_data["status"] = compute_trip_status(trip)
    return TripResponse.model_validate(trip_data)

@router.get("/", response_model=TripListResponse)
def list_trips(
    status: Optional[str] = Query(None, description="ongoing, upcoming, or completed"),
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    skip = (page - 1) * limit
    trips, total = crud_trip.get_multi_by_user(
        db=db, user_id=current_user.id, status=status, skip=skip, limit=limit
    )
    formatted_trips = [format_trip(t) for t in trips]
    return {"trips": formatted_trips, "total": total, "page": page}

@router.post("/", response_model=TripResponse, status_code=201)
def create_trip(
    trip_in: TripCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    if trip_in.end_date < trip_in.start_date:
        raise HTTPException(status_code=422, detail="End date cannot be before start date")
    trip = crud_trip.create_trip(db=db, trip=trip_in, user_id=current_user.id)
    return format_trip(trip)

@router.get("/{trip_id}", response_model=TripResponse)
def get_trip(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db=db, trip_id=trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id and not trip.is_public:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return format_trip(trip)

@router.put("/{trip_id}", response_model=TripResponse)
def update_trip(
    trip_id: UUID,
    trip_in: TripUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db=db, trip_id=trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    # Validation for dates
    start = trip_in.start_date or trip.start_date
    end = trip_in.end_date or trip.end_date
    if end < start:
         raise HTTPException(status_code=422, detail="End date cannot be before start date")
         
    trip = crud_trip.update_trip(db=db, db_trip=trip, trip_in=trip_in)
    return format_trip(trip)

@router.delete("/{trip_id}")
def delete_trip(
    trip_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db=db, trip_id=trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    crud_trip.delete_trip(db=db, trip_id=trip_id)
    return {"message": "Trip deleted"}
