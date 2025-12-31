const dateEl = document.getElementById("today");
dateEl.innerText = new Date().toDateString();

async function submitEntry() {
  const text = document.getElementById("entry").value;
  if (!text) return;

  const res = await fetch("http://127.0.0.1:5000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await res.json();

  document.getElementById("result").innerText =
    `mood detected: ${data.emotion}`;
}
