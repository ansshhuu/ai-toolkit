from pydantic import BaseModel,field_validator
from typing import List

class SummaryResult(BaseModel):
    summary:str

class KeywordResult(BaseModel):
    keywords:List[str]

class ClassificationResult(BaseModel):
    category: str

    @field_validator("category")
    @classmethod
    def force_lowercase(cls, v):
        return v.lower().strip()  

class FullAnalysisResult(BaseModel):
    summary: str
    keywords: List[str]
    category: str

    @field_validator("category")
    @classmethod
    def force_lowercase(cls, v):
        return v.lower().strip()




