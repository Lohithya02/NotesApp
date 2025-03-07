from fastapi import FastAPI # type: ignore
from app.routes import auth, notes

app = FastAPI()

app.include_router(auth.router, prefix="/auth")
app.include_router(notes.router, prefix="/notes")

@app.get("/")
def home():
    return {"message": "Welcome to NotesApp"}