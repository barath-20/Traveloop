from typing import Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.crud import crud_destination, crud_trip, crud_activity
from app.schemas.destination import DestinationResponse
from app.schemas.trip import TripResponse
from app.schemas.activity import ActivityResponse

router = APIRouter()

@router.get("/", response_model=dict)
def search_all(
    q: str = Query(..., min_length=2),
    type: Optional[str] = Query(None, description="Filter by type: destination, trip, activity"),
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db)
):
    skip = (page - 1) * limit
    results = {}
    
    if not type or type == "destination":
        destinations, d_total = crud_destination.search_destinations(db, q, skip, limit)
        results["destinations"] = {
            "items": [DestinationResponse.model_validate(d) for d in destinations],
            "total": d_total
        }
        
    if not type or type == "trip":
        # simple public trip search
        from app.models.trip import Trip
        t_query = db.query(Trip).filter(Trip.is_public == True, Trip.title.ilike(f"%{q}%"))
        t_total = t_query.count()
        trips = t_query.offset(skip).limit(limit).all()
        results["trips"] = {
            "items": [TripResponse.model_validate(t) for t in trips],
            "total": t_total
        }
        
    if not type or type == "activity":
        # Search global activities
        from app.models.activity import Activity
        a_query = db.query(Activity).filter(Activity.title.ilike(f"%{q}%"))
        a_total = a_query.count()
        activities = a_query.offset(skip).limit(limit).all()
        results["activities"] = {
            "items": [ActivityResponse.model_validate(a) for a in activities],
            "total": a_total
        }
        
    return results
