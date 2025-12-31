const calendar = document.getElementById("calendar-grid");
const entries = JSON.parse(localStorage.getItem("entries")) || {};

const year = 2026;
const monthNames = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];
const startDate = new Date(year, 0, 1);

for (let i = 0; i < 365; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);

  const dateStr = date.toISOString().split("T")[0];

  const dayDiv = document.createElement("div");
  dayDiv.className = "calendar-day";

 
  dayDiv.innerText = date.getDate();
  if (date.getDate() === 1) {
    const monthLabel = document.createElement("div");
  monthLabel.className = "month-label";
  monthLabel.innerText = monthNames[date.getMonth()];
  calendar.appendChild(monthLabel);
  dayDiv.style.gridColumnStart = 1;
}

  if (entries[dateStr]) {
    dayDiv.classList.add("filled");
  }

  dayDiv.onclick = () => {
    window.location.href = `journal.html?date=${dateStr}`;
  };

  calendar.appendChild(dayDiv);
}
