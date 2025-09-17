import chromadb
from sentence_transformers import SentenceTransformer
from dotenv import load_dotenv
import os
from langchain_openai import ChatOpenAI

persist_directory = "../data/vector_store"
collection_name = "pdf_documents"
client = chromadb.PersistentClient(path=persist_directory)
collection = client.get_collection(name=collection_name)

model = SentenceTransformer("all-MiniLM-L6-v2")

query_text = "Tell me everything about Google interviews"

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
llm = ChatOpenAI(
    model="gpt-4", 
    temperature=0.5,
    api_key=OPENAI_API_KEY
)

def get_answer(query_text):
    query_embedding = model.encode([query_text]) 
    results = collection.query(
        query_embeddings=query_embedding.tolist(),  
        n_results=3
    )

    context=results["documents"][0]
    #print(context)

    prompt=f"""You are assisting people in preparing for Tech interviews.Use the following context to answer the question concisely.
            Context:
            {context}

            Question: {query_text}

            Answer:"""


    response=llm.invoke(prompt)
    return response.content

#get_answer(query_text)


