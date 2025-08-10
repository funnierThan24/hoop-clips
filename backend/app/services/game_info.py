import firebase_admin
from firebase_admin import firestore, credentials
from fastapi import FastAPI


FIREBASE_KEY_PATH = "/Users/brendanhaniff/hoop-clips/backend/firebase_key.json"
cred = credentials.Certificate(FIREBASE_KEY_PATH)
firebase_admin.initialize_app(cred)
db = firestore.client()

def get_clips(limit: int = 20, offset: int = 0):
    docs = (
        db.collection("clips")
        .order_by("season")
        .offset(offset)
        .limit(limit)
        .stream()
    )
    return [doc.to_dict() for doc in docs] 