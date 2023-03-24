import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const { accounts } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const trackUserName = (event) => setUserName(event.target.value);
  const trackPassword = (event) => setPassword(event.target.value);
  
  
  const loginHandler = (event) => {
    event.preventDefault();

    accounts.forEach((account) => {
      if (account.userName === userName && account.password === password) {
        props.changePage('Account', account);
      } else {
        alert("Account info does not match");
      }
    });
  };

  return (
    <form onSubmit={loginHandler} className="create-account-form">
      <h2>Enter Your Account Info:</h2>
      <input
        onChange={trackUserName}
        value={userName}
        type="text"
        className="form-input"
        placeholder="User Name"
      />
      <input
        onChange={trackPassword}
        value={password}
        type="password"
        className="form-input"
        placeholder="Password"
      />
      <button className="submit-button">Login</button>
    </form>
    );
};

export default LoginForm;
