from flask import Blueprint, jsonify

meta_bp = Blueprint("meta", __name__)

# Dummy data for now
STATES = ["Himachal Pradesh", "Punjab", "Delhi", "Uttar Pradesh"]

DISTRICTS = {
    "Himachal Pradesh": ["Chamba", "Shimla", "Kangra"],
    "Punjab": ["Amritsar", "Ludhiana"],
    "Delhi": ["Central Delhi", "South Delhi"],
    "Uttar Pradesh": ["Lucknow", "Varanasi"]
}

COURTS = {
    "Chamba": ["Chamba Court Complex"],
    "Shimla": ["Shimla Court Complex"],
    "Kangra": ["Kangra Court Complex"],
    "Amritsar": ["Amritsar Civil Court"],
    "Ludhiana": ["Ludhiana District Court"],
    "Central Delhi": ["Tis Hazari"],
    "South Delhi": ["Saket Court"],
    "Lucknow": ["Lucknow Civil Court"],
    "Varanasi": ["Varanasi Civil Court"]
}

CASE_TYPES = [
    "Civil Suit",
    "Criminal Case",
    "Hindu Marriage Act",
    "Motor Accident Claims",
    "Property Dispute"
]

@meta_bp.route("/states")
def get_states():
    return jsonify(STATES)

@meta_bp.route("/districts/<state>")
def get_districts(state):
    return jsonify(DISTRICTS.get(state, []))

@meta_bp.route("/courts/<district>")
def get_courts(district):
    return jsonify(COURTS.get(district, []))

@meta_bp.route("/case_types")
def get_case_types():
    return jsonify(CASE_TYPES)
