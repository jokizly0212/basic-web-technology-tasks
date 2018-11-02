const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email = document.querySelector('.email');
const postalCode = document.querySelector('.postal');
const password = document.querySelector('.password');
const form = document.querySelector('form');
const phone = document.querySelector('.phone');
const warning = document.querySelector('.warning');
const formButton = document.querySelector('.form-button');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const postalCodeFormat = /^[0-9]{5}/;
const phoneFormat = /^(?:\+?3584|0)([0-9]){8}$/;
var validate = false;
function validateForm() {
    if(fname.value == '') {
        fname.focus();
        fname.classList.add('invalid');
        warning.innerHTML = "*Please enter your first name";
        warning.setAttribute('style', 'opacity: 1');
        fname.classList.add('vibrate');
        validate = false;
    } else if(lname.value == '') {
        lname.focus();
        lname.classList.add('invalid');
        warning.innerHTML = "*Please enter your last name";
        warning.setAttribute('style', 'opacity: 1');
        lname.classList.add('vibrate');
        validate = false;
    } else if(!phone.value.match(phoneFormat)) {
        phone.focus();
        phone.classList.add('invalid');
        warning.innerHTML = "*Please enter your correct phone number";
        warning.setAttribute('style', 'opacity: 1');
        phone.classList.add('vibrate');
        validate = false;
    } else if(!postalCode.value.match(postalCodeFormat)){
        postalCode.focus();
        postalCode.classList.add('invalid');
        warning.innerHTML = "*Postal code has to be in 5 digits";
        warning.setAttribute('style', 'opacity: 1');
        postalCode.classList.add('vibrate');
        validate = false;
    } else if(!email.value.match(mailFormat)){
        email.focus();
        email.classList.add('invalid');
        warning.innerHTML = "*Please enter your email in correct form";
        warning.setAttribute('style', 'opacity: 1');
        email.classList.add('vibrate');
        validate = false;
    } else if(password.value == ''){
        password.focus();
        password.classList.add('invalid');
        warning.innerHTML = "*Please enter your password";
        warning.setAttribute('style', 'opacity: 1');
        password.classList.add('vibrate');
        validate = false;
    } else {
        validate = true
    }
    return validate;
}

formButton.onclick = function () {
    formButton.classList.add('button-slide-up');
    form.classList.add('form-slide-up');
    form.addEventListener('webkitAnimationEnd', function () {
        form.setAttribute('style', 'visibility: visible; opacity: 1');
        form.classList.remove('form-slide-up');
    })
}
