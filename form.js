const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2'); 
const submit = document.getElementById('submit'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    submitter()
});


    function submitter() {
  
      const emailValue = email.value.trim();
      const usernameValue = username.value.trim();
      const password2Value = password2.value.trim();
      const passwordValue = password.value.trim();
    
        if (usernameValue === "" ) {
          setErrorFor(username, "Username cannot be blank");
          noSubmit()
        } else {
          setSuccessFor(username);
        }


        if (emailValue === "" ) {
          setErrorFor(email, "Email cannot be blank");
          noSubmit()
        } else if(!isEmail(emailValue)) {
          setErrorFor(email, 'Email is not valid');
          noSubmit()
        } else {
          setSuccessFor(email);
        }


        if (password2Value === "" ) {
          setErrorFor(password2, "Password cannot be blank");
          noSubmit()
        } else if(password2Value !== passwordValue) {
          setErrorFor(password2, 'Password must be the same');
          noSubmit()
        } else {
          setSuccessFor(password2)
        }


        if (passwordValue === "" ) {
          setErrorFor(password, "Password cannot be blank");
          noSubmit()
        } else if((/\d/.test(passwordValue) === false) && (/[A-Z]/.test(passwordValue.charAt(0)) === false)) {
          setErrorFor(password, "Begin with uppercase and include number");
          noSubmit()
        } else if((/\d/.test(passwordValue) === false)) {
          setErrorFor(password, "Password must include number:(0,1,2..)");
          noSubmit()
        } else if((/[A-Z]/.test(passwordValue.charAt(0)) === false)) {
          setErrorFor(password, "Password must begin with uppercase:(A,B,C..)");
          noSubmit()
        } else {
          setSuccessFor(password);
        }
    }

    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
  
      small.innerText = message;
      formControl.className = 'form-control error';
      }

    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
      }

      function isEmail(email) {
         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }

      
      function Submit() {
        submit.disable = false;
        submit.style.borderColor = '#8e44ad';
        submit.style.backgroundColor = '#8e44ad';
        }
      
        function noSubmit() {  
        
          submit.disable = true;
          submit.style.backgroundColor = '#bf89d4';
          submit.style.borderColor = '#bf89d4';
        
         username.addEventListener('click', Submit)
         email.addEventListener('click', Submit);
         password.addEventListener('click', Submit);
         password2.addEventListener('click', Submit);    
        } 
      

 

 