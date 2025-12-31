# 🟪 PIXELATED  

Pixelated is a **data-driven emotion journal** that transforms daily thoughts into a visual memory archive.  
Each journal entry is analyzed using **AI-based sentiment and emotion analysis**, and every day of the year becomes a **pixel** — colored emotion-wise.

Over time, these pixels form patterns: emotional rhythms, highs, lows, and trends that words alone can’t show.

---

## Idea & Motivation

Memories fade and dates blur. But emotions leave patterns.
Towards the end of every year I feel like time went by too fast, so I thought of building this record for minimal journaling and incorporating AI to analyze the mood of the day. AND it lets me write in my **own handwriting!**.

Pixelated started as an idea to preserve **not just what happened**, but **how it felt** — and to do so in a way that blends **technology, data visualization, and minimal design**.

At its core, Pixelated is both:
- a **personal memory tool**
- and a **technical experiment in emotion analysis**

The goal is to build a **living archive for 2026**, one pixel at a time.

---

## How It Works

1. The user writes a daily journal entry
2. The text is sent to a backend API
3. The backend uses **Hugging Face NLP models** to:
   - analyze emotional tone
   - extract sentiment intensity
4. Each day gets mapped to a **calendar pixel**
5. Pixels gain color only when an entry exists
6. Over time, emotional trends emerge visually

---

## Features

### Journal
- Custom handwriting journaling interface
- An entry per day
- Emotion analysis happens automatically
- Entries are stored with metadata (date, emotion, intensity)

### 🗓 Calendar
- Full-year pixel grid
- Each square represents one day
- Only days with entries are colored
- Clicking a day opens its journal entry
- Months are visually separated for clarity

### Stats (Data-Driven)
- Emotion distribution over time
- Mood trends and patterns
- Visual summaries powered by accumulated data  
*(Designed to evolve as more entries are added)*

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript
- Custom pixel font

### Backend
- Python
- Flask
- Hugging Face Transformers
- NLP sentiment & emotion models

### Deployment
- Frontend: GitHub Pages
- Backend: Local (future cloud deployment planned)
