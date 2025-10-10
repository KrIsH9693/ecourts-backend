from flask import Blueprint, jsonify
from models import QueryLog
from database import db
from sqlalchemy import func

logs_bp = Blueprint("logs", __name__)

# Get all recent query logs
@logs_bp.route("/logs", methods=["GET"])
def get_logs():
    logs = QueryLog.query.order_by(QueryLog.created_at.desc()).all()
    result = []
    for log in logs:
        result.append({
            "id": log.id,
            "case_type": log.case_type,
            "filing_number": log.filing_number,
            "status": log.status,
            "response_json": log.response_json,
            "created_at": log.created_at.strftime("%Y-%m-%d %H:%M:%S")
        })
    return jsonify(result)

# Get statistics
@logs_bp.route("/stats", methods=["GET"])
def get_stats():
    total = db.session.query(func.count(QueryLog.id)).scalar()
    success = db.session.query(func.count(QueryLog.id)).filter(QueryLog.status=="Success").scalar()
    failed = db.session.query(func.count(QueryLog.id)).filter(QueryLog.status=="Failed").scalar()
    success_rate = (success/total*100) if total > 0 else 0
    return jsonify({
        "total_queries": total,
        "successful": success,
        "failed": failed,
        "success_rate": round(success_rate,2)
    })
