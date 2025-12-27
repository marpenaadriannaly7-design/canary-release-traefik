document.addEventListener("DOMContentLoaded", function () {
  const requestsDiv = document.getElementById("requests");

  const storedRequest = localStorage.getItem("lastConsultation");

  if (!storedRequest) {
    requestsDiv.innerHTML = "<p>No consultation requests found.</p>";
    return;
  }

  const request = JSON.parse(storedRequest);

  requestsDiv.innerHTML = `
    <div class="request-card">
      <p><strong>Name:</strong> ${request.name}</p>
      <p><strong>Email:</strong> ${request.email}</p>
      <p><strong>Service:</strong> ${request.service}</p>
      <p><strong>Message:</strong><br>${request.message}</p>
      <p><strong>Date:</strong> ${request.date}</p>
    </div>
  `;
});
