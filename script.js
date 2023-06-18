let form = document.getElementById('signup-form');
let btn = document.getElementById('submit-button');

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

let usernameError = document.getElementById('usernameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');

const shapes = ['circle', 'square', 'oval', 'rectangle', 'triangle', 'hexagon'];

function showError(input, errorText) {
    let error = document.getElementById(input.id + 'Error');
    error.textContent = errorText;
}

function clearErrors() {
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
}

function moveButton(e) {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    changeShape();
}

// We need the button text to change as well, we want it to say 'Try Again'
function changeButtonText() {
    if (usernameError.textContent || emailError.textContent || passwordError.textContent || !username.value || !email.value || !password.value) {
        btn.textContent = 'Try Again';
    }
}

function revertButtonText() {
    btn.textContent = 'Submit';
}

// Change button text back to 'Submit' when the form is correctly filled out
form.addEventListener('input', function() {
    clearErrors();

    if (!username.value) {
        showError(username, 'Username is required');
    } else if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        showError(email, 'Enter a valid email');
    } else if (!password.value) {
        showError(password, 'Password is required');
    } else {
        revertButtonText();
    }
});

btn.addEventListener('mouseover', function(e) {
    if (usernameError.textContent || emailError.textContent || passwordError.textContent || !username.value || !email.value || !password.value) {
        moveButton(e);
        changeButtonText();
    }
});

// Change button text back to 'Submit' when the form is correctly filled out
btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (usernameError.textContent || emailError.textContent || passwordError.textContent || !username.value || !email.value || !password.value) {
        moveButton(e);
        changeButtonText();
    } else {
        alert('Form submitted');
    }
});

function changeShape() {
    let randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    btn.className = ''; // Clear previous shape
    btn.classList.add(randomShape);
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
});

btn.addEventListener('mouseover', function(e) {
    if (usernameError.textContent || emailError.textContent || passwordError.textContent || !username.value || !email.value || !password.value) {
        moveButton(e);
    }
});

btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (usernameError.textContent || emailError.textContent || passwordError.textContent || !username.value || !email.value || !password.value) {
        moveButton(e);
    } else {
        alert('Form submitted');
    }
});

// Initial shape change on page load
changeShape();
