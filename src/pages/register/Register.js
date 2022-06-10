import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label htmlFor="username">Username</label>
        <input
          className="registerInput"
          type="username"
          id="username"
          placeholder="Enter your username..."
        />
        <label htmlFor="email">Email</label>
        <input
          className="registerInput"
          type="email"
          id="email"
          placeholder="Enter your email..."
        />
        <label htmlFor="password">Password</label>
        <input
          className="registerInput"
          type="password"
          id="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Register;
