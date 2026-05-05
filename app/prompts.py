SUMMARY_PROMPT = """
You are an AI text summarizer.
Return only valid JSON in this format:

{{
  "summary": "short summary here"
}}

Text:
{text}
"""

KEYWORD_PROMPT = """
You are an AI keyword extractor.
Return only valid JSON in this format:

{{
  "keywords": ["keyword1", "keyword2", "keyword3"]
}}

Text:
{text}
"""

CLASSIFICATION_PROMPT = """
You are a text classifier. Return ONLY valid JSON. No explanation.

{{
  "category": "your_answer"
}}

STRICT RULES:
- Text about learning, students, teachers, school, education → category = "education"
- Text about patients, doctors, hospital, medicine → category = "healthcare"  
- Text about money, fraud, banking, stocks → category = "finance"
- Text about coding, software, programming → category = "software"
- AI/ML is a TOOL. Classify by WHERE it is used, not the tool itself.
- Output lowercase only. Single word. No punctuation.

Text: {text}
"""

FULL_ANALYSIS_PROMPT = """
You are a text analyzer. Return ONLY valid JSON. No explanation.

{{
  "summary": "one sentence summary",
  "keywords": ["word1", "word2", "word3"],
  "category": "specific_lowercase_category"
}}

CATEGORY RULES — pick most specific:
- learning, students, school, education → "education"
- doctors, hospital, medicine, patients → "healthcare"
- money, fraud, banking, investing → "finance"
- coding, software, programming → "software"
- AI/ML = tool. Classify by DOMAIN it is applied in.
- lowercase only, single word.

Text: {text}
"""

