from django.core import signing
from api.models.session_models import UserSession

def validate_auth_token(token: str) -> tuple[bool, dict | None]:
    try:
        decoded_data = signing.loads(token)
    except signing.BadSignature:
        return False, None
    
    if decoded_data.get("role") == "admin":
        return True, decoded_data


    session_id = decoded_data.get('session_id')
    if session_id is None:
        return False, None

    session = UserSession.objects.filter(id=session_id).first()
    if session is None:
        return False, None

    return True, decoded_data

def get_session_status(session_id: int) -> str | None:
    try:
        session = UserSession.objects.filter(id=session_id).first()
        return session.status if session.status else None
    except:
        return None