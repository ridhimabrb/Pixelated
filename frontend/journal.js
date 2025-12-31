const saveBtn = document.getElementById("saveEntry");
const textarea = document.getElementById("journalText");

const params = new URLSearchParams(window.location.search);
const date = params.get("date"); // like 2026-01-05

saveBtn.addEventListener("click", () => {
  if (!date) return;

  const entries = JSON.parse(localStorage.getItem("entries")) || {};

  entries[date] = {
    text: textarea.value,
    emotion: "neutral" // later HuggingFace replaces this
  };

  localStorage.setItem("entries", JSON.stringify(entries));
  alert("Saved!");
});
