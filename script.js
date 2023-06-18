let form = document.getElementById('signup-form');
let btn = document.getElementById('submit-button');

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

let usernameError = document.getElementById('usernameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');

function showError(input, errorText) {
    let error = document.getElementById(input.id + 'Error');
    error.textContent = errorText;
}

function clearErrors() {
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
}

function moveButton() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

form.addEventListener('input', function() {
    clearErrors();

    if (!username.value) {
        showError(username, 'Username is required');
    }

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        showError(email, 'Enter a valid email');
    }

    if (!password.value) {
        showError(password, 'Password is required');
    }

    if (usernameError.textContent || emailError.textContent || passwordError.textContent) {
        moveButton();
    }
});

btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (usernameError.textContent || emailError.textContent || passwordError.textContent || !username.value || !email.value || !password.value) {
        moveButton();
    } else {
        alert('Form submitted');
    }
});
