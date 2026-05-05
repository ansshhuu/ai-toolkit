import os 
from dotenv import load_dotenv
from groq import Groq

load_dotenv()
def get_client():
    api_key=os.getenv("GROQ_API_KEY")
    if not api_key or api_key=="your_key_here":
        raise ValueError("GROQ_API_KEY is missing. Add it inside .env file.")  
    return Groq(api_key=api_key)
def call_llm(prompt:str)->str:
    client=get_client()
    response=client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role":"user","content":prompt}],
        temperature=0,
        response_format={"type":"json_object"}
    )
    return response.choices[0].message.content
import json
from app.prompts import(
    SUMMARY_PROMPT,
    KEYWORD_PROMPT,
    CLASSIFICATION_PROMPT,
    FULL_ANALYSIS_PROMPT,
)

from app.models import(
    SummaryResult,
    KeywordResult,
    ClassificationResult,
    FullAnalysisResult,
)

def extract_json(text:str):
    text=text.strip()
    text=text.replace("```json","")
    text=text.replace("```","")

    return json.loads(text)

def build_prompt(task:str,text:str)->str:
    if task=="summarize":
        return SUMMARY_PROMPT.format(text=text)
    if task == "keywords":
        return KEYWORD_PROMPT.format(text=text)

    if task == "classify":
        return CLASSIFICATION_PROMPT.format(text=text)

    if task == "all":
        return FULL_ANALYSIS_PROMPT.format(text=text)
    raise ValueError("Invalid task. Use summarize, keywords, classify, or all.")

def validate_result(task:str, data:dict):
    if task=="summarize":
        return SummaryResult(**data)
    if task == "keywords":
        return KeywordResult(**data)

    if task == "classify":
        return ClassificationResult(**data)

    if task == "all":
        return FullAnalysisResult(**data)
    
    raise ValueError("Invalid task.")

def run_task(task: str, text: str):
    prompt = build_prompt(task, text)

    llm_response = call_llm(prompt)

    data = extract_json(llm_response)

    result = validate_result(task, data)

    return result

