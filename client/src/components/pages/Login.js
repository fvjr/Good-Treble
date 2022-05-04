import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../../styles/style.css';

function Login() {
  // const [loginState, setLoginState] = useState({ email: '', password: ''});

  return (
    <div>
      Login stuff here
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
            <button type="submit">Sign Up</button>
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
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected login with your info</p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
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
      </div>
      <script src="../utils/login.js"></script>
    </div>
  );
}

export default Login;
