# AI Toolkit

An AI-powered text processing toolkit built using Python, Groq LLM API, and FastAPI.

## Features

- Text Summarization
- Keyword Extraction
- Text Classification
- Strict JSON Outputs
- CLI Support
- FastAPI Backend
- Logging and Error Handling
- File Input Support
- JSON Export Support

---

## Tech Stack

- Python
- FastAPI
- Groq API
- Pydantic
- Uvicorn

---

## Project Structure

```text
ai-toolkit/
│
├── app/
│   ├── api.py
│   ├── main.py
│   ├── utils.py
│   ├── models.py
│   ├── prompts.py
│   ├── logger.py
│   └── __init__.py
│
├── logs/
├── sample_inputs/
├── .env
├── .gitignore
├── requirements.txt
└── README.md
```

---

## Installation

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create `.env` file:

```env
GROQ_API_KEY=your_api_key_here
```

---

## CLI Usage

Analyze text directly:

```bash
python -m app.main --task all --text "AI is changing education."
```

Analyze file:

```bash
python -m app.main --task summarize --file sample_inputs/article.txt
```

Save output:

```bash
python -m app.main --task all --file sample_inputs/article.txt --out result.json
```

---

## FastAPI Backend

Run server:

```bash
uvicorn app.api:app --reload
```

Open Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---
## Frontend Setup

Move into frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

Make sure FastAPI backend is also running:

```bash
uvicorn app.api:app --reload
```
## Example Output

```json
{
  "summary": "AI improves education by helping students learn faster.",
  "keywords": ["AI", "education", "students"],
  "category": "education"
}
```

---

## Future Improvements

- RAG integration
- Evaluation metrics
- Database support
- Authentication
- Deployment