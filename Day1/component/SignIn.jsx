import React from 'react';
import '../assests/SignIn.css';
function SignIn(props) {
  const signInValidation = () => {
    const phoneNumber = document.getElementById("username");
    const passWord = document.getElementById("password");
    const phoneNumberRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;

    const invalidNumber = document.createElement('p');
    const invalidPassword = document.createElement('p');

    removeErrorMessage(phoneNumber);
    removeErrorMessage(passWord);

    if (!phoneNumberRegex.test(phoneNumber.value)) {
      invalidNumber.textContent = "Invalid Number";
      invalidNumber.style.color = "red";
      invalidNumber.style.fontSize = "10px";
      phoneNumber.parentNode.append(invalidNumber);
    }
    if (!passwordRegex.test(passWord.value)) {
      invalidPassword.textContent = "Invalid Password";
      invalidPassword.style.color = "red";
      invalidPassword.style.fontSize = "10px";
      passWord.parentNode.append(invalidPassword);
    }
  };

  const removeErrorMessage = (element) => {
    const existingErrorMessage = element.parentNode.querySelector('p');
    if (existingErrorMessage) {
      existingErrorMessage.remove();
    }
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    signInValidation();
  };

  return (
    <div className="wrapper">
      <div className="wrapper-util">
        <form action="">
          <center><h1>Sign In</h1></center>
          <div className="wrapper-username">
            <input type="text" placeholder="phone number" name="username" id="username" required />
          </div>
          <div className="wrapper-password">
            <input type="password" placeholder="password" name="password" id="password" required />
          </div>
          <div>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">remember me</label>
          </div>
          <div id="signup">
            <p>Don't Have An Account <a href="#" class="signin-link" onClick={props.toggleForm}>
            SignIn
          </a></p>
          </div>
          <div>
            <input type="submit" value="Sign up" id="wrapper-Sign-up" onClick={handleSignUpClick} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;