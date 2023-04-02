import React, { useRef } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const { accounts, viewAccount } = props;

  const userNameRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (event) => {
    event.preventDefault();

    accounts.forEach((account) => {
      if (
        account.userName === userNameRef.current.value &&
        account.password === passwordRef.current.value
      ) {
        viewAccount("Account", account);
      }
    });
  };

  return (
    <form onSubmit={loginHandler} className="create-account-form">
      <h2>Enter Your Account Info:</h2>
      <input
        ref={userNameRef}
        type="text"
        className="form-input"
        placeholder="User Name"
      />
      <input
        ref={passwordRef}
        type="password"
        className="form-input"
        placeholder="Password"
      />
      <button className="submit-button">Login</button>
    </form>
  );
};

export default LoginForm;
