from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()

@router.get("/")
def get_notes(db: Session = Depends(get_db)):
    return {"notes": "List of notes"}