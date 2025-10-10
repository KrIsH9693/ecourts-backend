from dotenv import load_dotenv
import os

# Load .env file locally (Render automatically uses Environment Variables)
load_dotenv()

# 1️⃣ Try using Render's DATABASE_URL directly (best practice)
DATABASE_URL = os.getenv("DATABASE_URL")

# 2️⃣ If DATABASE_URL not found, build from individual env vars (for local)
if not DATABASE_URL:
    DB_USER = os.getenv("DB_USER", "postgres")
    DB_PASSWORD = os.getenv("DB_PASSWORD", "9877")
    DB_HOST = os.getenv("DB_HOST", "ecourts-backend-5.postgres.render.com")
    DB_PORT = os.getenv("DB_PORT", "5432")
    DB_NAME = os.getenv("DB_NAME", "ecourt_scraper_db")

    DATABASE_URL = f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# ✅ Final SQLAlchemy Database URI
SQLALCHEMY_DATABASE_URI = DATABASE_URL

# Optional SQLAlchemy config
SQLALCHEMY_TRACK_MODIFICATIONS = False
