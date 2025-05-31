function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("login-msg");

  // Dummy credentials (for testing)
  const validEmail = "user@skillpilot.com";
  const validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "index.html"; // redirect to main site
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password.";
  }

  return false;
}
