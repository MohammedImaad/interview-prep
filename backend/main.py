from fastapi import FastAPI, Query
from retriever_file import get_answer
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080", "http://127.0.0.1:8080"],  # Your React dev server
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get("/ask")
def ask(query: str = Query(..., description="Your question to the RAG pipeline")):
    result = get_answer(query)
    return {"query": query, "answer": result}