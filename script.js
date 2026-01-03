// --------------------
// Pure logic (testable)
// --------------------
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --------------------
// Browser-only logic
// --------------------
function setupConsultationForm() {
  const form = document.getElementById("consultationForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !message) {
      document.getElementById("confirmation").innerText =
        "Please complete all fields before submitting.";
      return;
    }

    if (!validateEmail(email)) {
      document.getElementById("confirmation").innerText =
        "Please enter a valid email address.";
      return;
    }

    const newRequest = {
      id: Date.now(),
      name,
      email,
      service,
      message,
      date: new Date().toLocaleString(),
      contactHistory: []
    };

    const existing =
      JSON.parse(localStorage.getItem("consultations")) || [];
    existing.push(newRequest);

    localStorage.setItem("consultations", JSON.stringify(existing));

    document.getElementById("confirmation").innerText =
      "Thank you. Your consultation request has been submitted successfully.";

    form.reset();
  });
}

// Only run browser code if DOM exists
if (typeof document !== "undefined") {
  setupConsultationForm();
}

// Export ONLY pure logic for Jest
if (typeof module !== "undefined") {
  module.exports = { validateEmail };
}

fetch("/version")
  .then(res => res.json())
  .then(data => {
    document.getElementById("version").innerText =
      `Version: ${data.version} (${data.status})`;
  });

