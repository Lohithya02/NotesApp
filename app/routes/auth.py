from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
import bcrypt

router = APIRouter()

@router.post("/signup")
def signup(user_name: str, user_email: str, password: str, db: Session = Depends(get_db)):
    hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    new_user = {"user_name": user_name, "user_email": user_email, "password": hashed_pw}
    db.add(new_user)
    db.commit()
    return {"message": "User created successfully"}