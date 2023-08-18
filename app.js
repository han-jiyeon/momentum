const loginForm = document.getElementById('login-form');
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);

}

loginForm.addEventListener("submit", onLoginSubmit);

// localStorage.getItem('username');