from fastapi import FastAPI
from pydantic import BaseModel
from app.utils import run_task 
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI(title="AI toolkit app")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text:str

@app.post("/summarize")
def summarize(req:TextRequest):
    return run_task("summarize",req.text)

@app.post("/keywords")
def keywords(req: TextRequest):
    return run_task("keywords", req.text)


@app.post("/classify")
def classify(req: TextRequest):
    return run_task("classify", req.text)


@app.post("/analyze")
def analyze(req: TextRequest):
    return run_task("all", req.text)

