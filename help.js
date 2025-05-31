// Toggle FAQ answers
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Handle form submission
document.getElementById('helpForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const question = document.getElementById('question').value.trim();

  if (name && email && question) {
    document.getElementById('formMessage').textContent = "Thanks! We'll get back to you soon.";
    this.reset();
  } else {
    document.getElementById('formMessage').textContent = "Please fill out all fields.";
    document.getElementById('formMessage').style.color = "red";
  }
});
