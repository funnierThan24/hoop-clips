from fastapi import APIRouter, Query
from app.services.game_info import get_clips

router = APIRouter()
@router.get("/api/clips")
def Clips(limit: int = Query(20, ge=1), offset: int = Query(0, ge=0)):
    clips = get_clips(limit=limit, offset=offset)
    return clips