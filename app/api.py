from fastapi import FastAPI
from pydantic import BaseModel
from app.utils import run_task 

app=FastAPI(title="AI toolkit app")

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

