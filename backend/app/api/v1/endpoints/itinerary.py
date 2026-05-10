from typing import Optional
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.api import deps
from app.models.user import User
from app.crud import crud_trip, crud_section, crud_activity
from app.schemas.trip import TripResponse
from app.schemas.section import TripSectionResponse
from app.schemas.activity import TripActivityResponse

router = APIRouter()

@router.get("/{trip_id}/itinerary", response_model=dict)
def get_itinerary(
    trip_id: UUID,
    view: Optional[str] = Query("list", description="list or calendar"),
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    trip = crud_trip.get_trip(db, trip_id)
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip.user_id != current_user.id and not trip.is_public:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    sections = crud_section.get_sections_by_trip(db, trip_id)
    trip_activities = crud_activity.get_trip_activities(db, trip_id)
    
    # Format activities grouped by section_id
    activities_by_section = {}
    unassigned_activities = []
    
    for ta in trip_activities:
        formatted_ta = TripActivityResponse.model_validate(ta).model_dump()
        if ta.section_id:
            if str(ta.section_id) not in activities_by_section:
                activities_by_section[str(ta.section_id)] = []
            activities_by_section[str(ta.section_id)].append(formatted_ta)
        else:
            unassigned_activities.append(formatted_ta)
            
    formatted_sections = []
    for s in sections:
        section_data = TripSectionResponse.model_validate(s).model_dump()
        section_data["activities"] = activities_by_section.get(str(s.id), [])
        formatted_sections.append(section_data)
        
    trip_data = TripResponse.model_validate(trip).model_dump()
    trip_data["status"] = crud_trip.compute_trip_status(trip)
    
    return {
        "trip": trip_data,
        "sections": formatted_sections,
        "unassigned_activities": unassigned_activities
    }
