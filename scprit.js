// Get DOM elements
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

// Show Sign Up form and hide Sign In form
signUpButton.addEventListener('click', () => {
  signInForm.style.display = 'none';
  signUpForm.style.display = 'block';
});

// Show Sign In form and hide Sign Up form
signInButton.addEventListener('click', () => {
  signInForm.style.display = 'block';
  signUpForm.style.display = 'none';
});
