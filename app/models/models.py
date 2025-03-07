from sqlalchemy import Column, String, DateTime, ForeignKey # type: ignore
from sqlalchemy.orm import relationship # type: ignore
import datetime, uuid
from app.database import Base

class User(Base):
    __tablename__ = "users"

    user_id = Column(String(36), primary_key=True, default=lambda: str(uuid)
    )