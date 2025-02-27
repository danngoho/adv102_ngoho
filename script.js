// Handle form submission (optional)
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple client-side validation (you can replace this with actual login logic)
  if (email && password) {
    alert(`Logged in successfully with email: ${email}`);
  } else {
    alert('Please fill out all fields.');
  }
});
