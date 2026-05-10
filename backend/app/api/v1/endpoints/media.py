from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
import os
import uuid
from app.core.config import settings

router = APIRouter()

# Ensure uploads directory exists
UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@router.post("/upload")
async def upload_media(file: File(UploadFile)):
    # Validate file type
    allowed_types = ["image/jpeg", "image/png", "image/webp"]
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Only JPEG, PNG and WEBP images are allowed")
    
    # Generate unique filename
    file_extension = os.path.splitext(file.filename)[1]
    filename = f"{uuid.uuid4()}{file_extension}"
    file_path = os.path.join(UPLOAD_DIR, filename)
    
    # Save file
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Could not save file: {str(e)}")
    
    # Return local URL (assumes server is running on localhost:8000)
    # In production, this would be a real domain
    url = f"/uploads/{filename}"
    return {"url": url, "filename": filename}
