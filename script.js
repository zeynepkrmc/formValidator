const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText =  message;
    div.className = 'invalid-feedback';
}
function success(input) {
    input.className = 'form-control is-valid'
}


form.addEventListener('submit',function(e){
    
    if(fname.value === '') {
        error(fname, ' first name needed');
    }else {
        success(fname)
    }
    if(lname.value === '') {
        error(lname, 'last name needed');
    }else {
        success(lname)
    }
    if(email.value === '') {
        error(email,'email needed');
    }else {
        success(email)
    }
    if(password.value === '') {
        error(password, 'password needed');
    }else {
        success(password)
    }
    if(repassword.value === '') {
        error(repassword, 'type password again');
    }else {
        success(repassword)
    }
    

    
});

