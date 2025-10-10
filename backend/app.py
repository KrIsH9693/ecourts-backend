import os
from flask import Flask
from dotenv import load_dotenv
from config import SQLALCHEMY_DATABASE_URI
from database import db
from routes.meta import meta_bp
from routes.case import case_bp
from routes.logs import logs_bp

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)

# Database Configuration
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", SQLALCHEMY_DATABASE_URI)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize SQLAlchemy
db.init_app(app)

# Register Blueprints
app.register_blueprint(meta_bp, url_prefix="/api")
app.register_blueprint(case_bp, url_prefix="/api")
app.register_blueprint(logs_bp, url_prefix="/api")

@app.route("/")
def home():
    return "🚀 ECourt Scraper Flask + PostgreSQL Running Successfully!"

# Ensure tables are created within app context
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    # Render assigns PORT dynamically
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
