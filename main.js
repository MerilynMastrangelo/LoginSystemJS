const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatPass = document.querySelector('#password-repeat');
// const formControl = documet.querySelector('.form-control')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();

});

function checkInputs() {
  const verification = {
    usernameValue: false,
    emailValue: false,
    passwordValue: false,
    };
    
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const repeatPassValue = repeatPass.value.trim();
    
    if(usernameValue === ""){
        //Show error and add error class
        setErrorFor(username, 'Username cannot be blank');
    }else{
        verification.usernameValue = true;
        setSuccessFor(username);
    }
    if(emailValue === ""){
        setErrorFor(email, 'Email cannot be blank');
    }else{
        verification.emailValue = true;
        setSuccessFor(email);
    }
    if(passwordValue === ""){
        setErrorFor(password, 'Password cannot be blank');
    }else{
        setSuccessFor(password);
    }
    if(repeatPassValue === ""){
        setErrorFor(repeatPass, 'Password check cannot be blank');
    }else if(repeatPassValue != passwordValue){
        setErrorFor(repeatPass, 'Password does not match');
    }else{
        verification.passwordValue = true;
        setSuccessFor(repeatPass);
    }
  const auth = Object.values(verification)
      .every((item) => item === true);
  // call authentication
  if (auth) {
    // auth
  }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;
    small.style.visibility = 'visible';

    //add error class
    formControl.classList.add('error');
}


function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}