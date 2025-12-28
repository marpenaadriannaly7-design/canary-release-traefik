document.getElementById("consultationForm").addEventListener("submit", function (e) {
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

  const newRequest = {
    id: Date.now(),
    name,
    email,
    service,
    message,
    date: new Date().toLocaleString(),
    contactHistory: []
  };

  const existing = JSON.parse(localStorage.getItem("consultations")) || [];
  existing.push(newRequest);

  localStorage.setItem("consultations", JSON.stringify(existing));

  document.getElementById("confirmation").innerText =
    "Thank you. Your consultation request has been submitted successfully.";

  document.getElementById("consultationForm").reset();
});
function validateEmail(email) {
  return email.includes("@");
}

if (typeof module !== "undefined") {
  module.exports = { validateEmail };
}


