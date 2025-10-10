from database import db
from datetime import datetime

class QueryLog(db.Model):
    __tablename__ = "query_logs"

    id = db.Column(db.Integer, primary_key=True)
    case_type = db.Column(db.String(100))
    filing_number = db.Column(db.String(50))
    status = db.Column(db.String(50))
    response_json = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<QueryLog {self.case_type} - {self.filing_number}>"
