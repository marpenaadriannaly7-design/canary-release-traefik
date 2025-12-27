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

  const consultationRequest = {
    name: name,
    email: email,
    service: service,
    message: message,
    date: new Date().toLocaleString()
  };

  localStorage.setItem(
    "lastConsultation",
    JSON.stringify(consultationRequest)
  );

  document.getElementById("confirmation").innerText =
    "Thank you. Your consultation request has been submitted successfully. Our consultant will contact you within 24 hours.";

  document.getElementById("consultationForm").reset();
});
