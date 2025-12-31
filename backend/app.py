from flask import Flask, request, jsonify
from transformers import pipeline
import sqlite3
from datetime import date
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load emotion model
emotion_model = pipeline(
    "text-classification",
    model="j-hartmann/emotion-english-distilroberta-base",
    return_all_scores=True
)

# Database setup
def get_db():
    return sqlite3.connect("database.db")

conn = get_db()
conn.execute("""
CREATE TABLE IF NOT EXISTS journal (
    entry_date TEXT PRIMARY KEY,
    text TEXT,
    emotion TEXT,
    score REAL
)
""")
conn.commit()
conn.close()

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    text = data["text"]
    today = str(date.today())

    emotions = emotion_model(text)[0]
    top = max(emotions, key=lambda x: x["score"])

    conn = get_db()
    conn.execute(
        "INSERT OR REPLACE INTO journal VALUES (?, ?, ?, ?)",
        (today, text, top["label"], top["score"])
    )
    conn.commit()
    conn.close()

    return jsonify({
        "emotion": top["label"],
        "score": round(top["score"], 2)
    })

@app.route("/entries", methods=["GET"])
def entries():
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT * FROM journal")
    rows = cur.fetchall()
    conn.close()

    return jsonify(rows)

if __name__ == "__main__":
    app.run(debug=True)
