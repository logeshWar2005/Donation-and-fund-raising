import React from 'react';
import '../assests/SignUp.css';

function SignUp(props) {
  const signUpValidation = (event) => {
    event.preventDefault(); 

    const phoneNumber = document.getElementById("username");
    const password = document.getElementById("enter-password");
    const confirmPassword = document.getElementById("re-enter-password");

    const phoneNumberRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;

    const invalidNumber = document.createElement('p');
    const invalidPassword = document.createElement('p');
    const invalidConfirmPassword = document.createElement('p');

    removeErrorMessage(phoneNumber);
    removeErrorMessage(password);
    removeErrorMessage(confirmPassword);

    if (!phoneNumberRegex.test(phoneNumber.value)) {
      invalidNumber.textContent = "Invalid Number";
      invalidNumber.style.color = "red";
      invalidNumber.style.fontSize = "10px";
      phoneNumber.parentNode.append(invalidNumber);
    }

    if (!passwordRegex.test(password.value)) {
      invalidPassword.textContent = "Invalid Password";
      invalidPassword.style.color = "red";
      invalidPassword.style.fontSize = "10px";
      password.parentNode.append(invalidPassword);
    }

    if (password.value !== confirmPassword.value) {
      invalidConfirmPassword.textContent = "Passwords do not match";
      invalidConfirmPassword.style.color = "red";
      invalidConfirmPassword.style.fontSize = "10px";
      confirmPassword.parentNode.append(invalidConfirmPassword);
    }
  };

  const removeErrorMessage = (element) => {
    const existingErrorMessage = element.parentNode.querySelector('p');
    if (existingErrorMessage) {
      existingErrorMessage.remove();
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper-util">
        <form onSubmit={signUpValidation}>
          <center><h1>Sign Up</h1></center>
          <div className="wrapper-username">
            <input type="text" placeholder="phone number" name="username" id="username"  />
          </div>
          <div className="wrapper-password">
            <input type="password" placeholder="enter-password" name="password" id="enter-password" />
          </div>
          <div className="wrapper-password">
            <input type="password" placeholder="re-enter-password" name="confirmPassword" id="re-enter-password"  />
          </div>
          <p>Already Have An Account <span className="signup-link" onClick={props.toggleForm}>SignIn</span></p>
          <div>
            <input type="submit" value="Sign up" id="wrapper-Sign-up"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
