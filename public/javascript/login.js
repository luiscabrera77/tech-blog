// LOG IN
async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// SIGN UP
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

// SOW HIDE FORMS
var loginForm = document.querySelector("#loginForm"); 
var signupForm = document.querySelector("#signupForm"); 
var createBtn = document.querySelector("#createBtn"); 
var loginBtn = document.querySelector("#loginBtn");

signupForm.hidden = true;
loginBtn.hidden = true;

//When the buttons are clicked... 
createBtn.addEventListener("click", function () {
  signupForm.hidden = false;
  loginBtn.hidden = false;
  loginForm.hidden = true;
  createBtn.hidden = true;
})

loginBtn.addEventListener("click", function () {
  signupForm.hidden = true;
  loginBtn.hidden = true;
  loginForm.hidden = false;
  createBtn.hidden = false;
})