from fastapi import APIRouter
from app.api.v1.endpoints import auth, trips, sections, activities, itinerary, expenses

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(trips.router, prefix="/trips", tags=["trips"])
api_router.include_router(sections.router, prefix="/trips", tags=["trip_sections"])
api_router.include_router(activities.router_trip, prefix="/trips", tags=["trip_activities"])
api_router.include_router(activities.router_sys, prefix="/activities", tags=["system_activities"])
api_router.include_router(itinerary.router, prefix="/trips", tags=["itinerary"])
api_router.include_router(expenses.router, prefix="/trips", tags=["expenses"])
