const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText =  message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}


function validatePassword() {
    if (password.value !== repassword.value ) {
        error(repassword, 'Passwords do not match');
    } else {
        success(repassword);
       
    }
}

function validateEmail() {
    const emailValue = email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        error(email, 'Email is required');
    } else if (!emailRegex.test(emailValue)) {
        error(email, 'Invalid email format');
    } else {
        success(email);
    }
}

function validatePasswordRequirements() {
    const passwordValue = password.value;
    const passwordRegex = /^(?=.*[a-zA-Z]).{8,}$/;

    if (!passwordRegex.test(passwordValue)) {
        error(password, 'Password must be at least 8 characters long and contain at least one letter');
    } else {
        success(password);
    }
}

form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    if (fname.value === '') {
        error(fname, 'First name is required');
    } else {
        success(fname);
    }

    if (lname.value === '') {
        error(lname, 'Last name is required');
    } else {
        success(lname);
    }

    validateEmail();
    validatePasswordRequirements();
    validatePassword();
});
