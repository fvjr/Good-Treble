import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
import '../styles/style.css';

function Login() {
  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  });
  console.log(loginState);
  // const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on login form input changes
  const loginChange = (event) => {
    const {
      name,
      value
    } = event.target;
    console.log(name, value);
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(loginState);
    try {
      const {
        data
      } = await loginChange({
        variables: {
          ...loginState
        },
      });
      //auth login here
    } catch (err) {
      console.error(err);
    }

    //clear login form values
    setLoginState({
      email: '',
      password: '',
    });
  };

  const onClick = (e) => {
    const container = document.getElementById('container');

    if (e.target.innerHTML == 'Sign Up') {
      container.classList.add('right-panel-active');
    }

    if (e.target.innerHTML == 'Sign In') {
      container.classList.remove('right-panel-active');
    }
  };

  return (  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css"
      integrity="sha384-Tv5i09RULyHKMwX0E8wJUqSOaXlyu3SQxORObAI08iUwIalMmN5L6AvlPX2LMoSE"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"
      integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Audiowide&family=Baloo+2&family=Oxygen:wght@700&family=Syne+Mono&family=Yesteryear&display=swap"
      rel="stylesheet"
    />
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form className="form signup-form">
          <h1 className="create-account-header">Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              🎵
            </a>
            <a href="#" className="social">
              👨‍🎤
            </a>
            <a href="#" className="social">
              🎟️
            </a>
          </div>
          <input type="text" placeholder="Name" id="name-signup" />
          <input type="email" placeholder="Email" id="email-signup" />
          <input
            type="password"
            placeholder="Password"
            id="password-signup"
          />
          {/* <button type="submit">Sign Up</button> */}
          {/* <button className={className} id="signUp">Sign Up</button> */}
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="form login-form">
          <h1 className="sign-in-header">Sign In</h1>
          <div className="social-container">
            <a href="#" className="social">
              🎵
            </a>
            <a href="#" className="social">
              👨‍🎤
            </a>
            <a href="#" className="social">
              🎟️
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" id="email-login" />
          <input type="password" placeholder="Password" id="password-login" />
          <a href="">Forgot your Password?</a>
          {/* <button type="submit">Sign In</button> */}
          <button onClick={onClick} className="ghost" id="signIn">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected login with your info</p>
            {/* <button className="ghost" id="signIn">
              Sign In
            </button> */}
            <button onClick={onClick} className="ghost" id="signUp"></button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Music Lover!</h1>
            <p>Enter your info and turn up the tunes!</p>
            <button className="ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* <script
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script src="../utils/login.js"></script>
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      <script src="https://unpkg.com/@popperjs/core@^2.0.0"></script> */}
=======
>>>>>>> 9c20b51c2fe92f1b2af9e42ad5e916a7d3737b02
    </div>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
      integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="../utils/login.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://unpkg.com/@popperjs/core@^2.0.0"></script>
  </div>
  );
}

export default Login;