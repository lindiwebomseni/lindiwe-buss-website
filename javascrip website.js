document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      event.preventDefault();
    } else {
      alert("Thank you for your message, " + name + "! We will get back to you soon.");
    }
  });
  