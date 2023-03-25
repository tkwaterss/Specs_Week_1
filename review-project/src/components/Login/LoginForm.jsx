import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const { accounts, viewAccount } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const trackUserName = (event) => setUserName(event.target.value);
  const trackPassword = (event) => setPassword(event.target.value);

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(accounts);
    accounts.forEach((account) => {
      if (account.userName === userName && account.password === password) {
        viewAccount("Account", account);
        //TODO add another function changeLinks (passes 'logged in')
        props.loggedIn(true);
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
