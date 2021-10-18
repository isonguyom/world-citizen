//TOGGLING PASSWORD VISIBILITY
//password
const togglePswVisibility = document.querySelector('#pswVisibility');
const password = document.querySelector('#psw');
togglePswVisibility.addEventListener('click', function () {

    
    if (password.type === "password") {
        password.type = "text";
        this.innerHTML = '<span class="iconify" data-icon="eva:eye-fill" style="color: #414141;" data-width="20"></span>'
    } else {
        password.type = "password";
        this.innerHTML = '<span id="eyeSlash" class="iconify wc-eye-slash" data-icon="eva:eye-off-fill" style="color: #414141;" data-width="20"></span>'
    }
});
// confirm password
const toggleConfirmPswVisibility = document.querySelector('#confirmPswVisibility');
const confirmPassword = document.querySelector('#confirmPsw');
toggleConfirmPswVisibility.addEventListener('click', function () {

    
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        this.innerHTML = '<span class="iconify" data-icon="eva:eye-fill" style="color: #414141;" data-width="20"></span>'
    } else {
        confirmPassword.type = "password";
        this.innerHTML = '<span id="eyeSlash" class="iconify wc-eye-slash" data-icon="eva:eye-off-fill" style="color: #414141;" data-width="20"></span>'
    }
});