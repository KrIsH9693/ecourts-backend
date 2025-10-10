from flask import Blueprint, request, jsonify
from datetime import datetime
from models import QueryLog
from database import db

case_bp = Blueprint("case", __name__)

@case_bp.route("/case/search", methods=["POST"])
def search_case():
    data = request.json
    case_number = data.get("case_number")
    filing_year = data.get("filing_year")
    case_type = data.get("case_type")

    # Dummy response
    response = {
        "filing_number": f"{case_number}/{filing_year}",
        "filing_date": "2025-07-22",
        "case_type": case_type,
        "act": "Hindu Marriage Act",
        "status": "Pending",
        "petitioners": ["Rahul Sharma"],
        "respondents": ["Priya Sharma"],
        "orders": [
            {
                "order_date": "2025-07-22",
                "order_title": "Notice Issued",
                "order_link": f"/api/case/orders/{case_number}_{filing_year}_notice.pdf"
            }
        ]
    }

    # Save log in DB
    try:
        log = QueryLog(
            case_type=case_type,
            filing_number=f"{case_number}/{filing_year}",
            status="Success",
            response_json=response
        )
        db.session.add(log)
        db.session.commit()
    except Exception as e:
        print("DB Log Error:", e)

    return jsonify(response)
