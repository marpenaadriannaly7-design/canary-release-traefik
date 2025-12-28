document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("requests");
  const consultations = JSON.parse(localStorage.getItem("consultations")) || [];

  if (consultations.length === 0) {
    container.innerHTML = "<p>No consultation requests found.</p>";
    return;
  }

  container.innerHTML = consultations.map((c, index) => `
    <div class="request-card">
      <h3>Client ${index + 1}</h3>
      <p><strong>Name:</strong> ${c.name}</p>
      <p><strong>Email:</strong> ${c.email}</p>
      <p><strong>Service:</strong> ${c.service}</p>
      <p><strong>Message:</strong><br>${c.message}</p>
      <p><strong>Submitted:</strong> ${c.date}</p>

      <h4>Contact History</h4>
      <ul>
        ${
          c.contactHistory.length === 0
            ? "<li>No contact history yet.</li>"
            : c.contactHistory.map(h => `<li>${h.date}: ${h.note}</li>`).join("")
        }
      </ul>

      <textarea id="note-${c.id}" placeholder="Add contact note"></textarea>
      <button onclick="addContact(${c.id})">Add Contact Note</button>
    </div>
  `).join("");
});

function addContact(clientId) {
  const consultations = JSON.parse(localStorage.getItem("consultations")) || [];
  const noteInput = document.getElementById(`note-${clientId}`);
  const note = noteInput.value.trim();

  if (!note) return;

  const client = consultations.find(c => c.id === clientId);

  client.contactHistory.push({
    date: new Date().toLocaleString(),
    note
  });

  localStorage.setItem("consultations", JSON.stringify(consultations));
  location.reload();
}
