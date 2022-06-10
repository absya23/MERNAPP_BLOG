import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="email">Email</label>
        <input
          className="loginInput"
          type="email"
          id="email"
          placeholder="Enter your email..."
        />
        <label htmlFor="password">Password</label>
        <input
          className="loginInput"
          type="password"
          id="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
