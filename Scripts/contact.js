(function() {
  emailjs.init("9hD6DDktJEwQe2yBE"); 
})();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("form-status");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const phone = form.user_phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      statusMsg.textContent = "Please fill in all required fields.";
      statusMsg.style.color = "red";
      return;
    }

    statusMsg.textContent = "Sending...";
    statusMsg.style.color = "#00ff99";

    console.log("Sending business email to service...");

    emailjs.sendForm("service_9oju2ur", "template_6fldwc6", form)
      .then(() => {
        console.log("Business email sent successfully.");

        if (email) {
          console.log("Sending auto-reply to client.");
          return emailjs.sendForm("service_9oju2ur", "template_2zulxp7", form);
        } else {
          return Promise.resolve();
        }
      })
      .then(() => {
        console.log("Auto-reply sent.");
        statusMsg.textContent = "Message sent successfully!";
        statusMsg.style.color = "#00ff99";
        form.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        statusMsg.textContent = "Something went wrong. Please try again.";
        statusMsg.style.color = "red";
      });
  });
});