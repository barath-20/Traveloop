from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI(
    title="Traveloop API",
    description="Backend API for the Traveloop travel planning application.",
    version="1.0.0",
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static files
if not os.path.exists("uploads"):
    os.makedirs("uploads")
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")


@app.get("/")
def read_root():
    return {"message": "Welcome to the Traveloop API"}

from app.api.v1.api import api_router
from app.core.config import settings

app.include_router(api_router, prefix=settings.API_V1_STR)

