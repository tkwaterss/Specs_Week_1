import React, { useState } from "react";
import "./CreateAccountForm.css";

const CreateAccountForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const changeUserName = (event) => setUserName(event.target.value);
  const changePassword = (event) => setPassword(event.target.value);
  const changeConfirm = (event) => setConfirm(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirm) {
      alert("please enter matching passwords");
    } else {
      let user = {
        userName: userName,
        password: password,
        toDoList: ['test item']
      };
      props.addAccount(user);
      setUserName("");
      setPassword("");
      setConfirm("");
    }

  };

  return (
    <form className="create-account-form" onSubmit={submitHandler}>
      <h2>Enter New Account Info:</h2>
      <input className="form-input"
        value={userName}
        onChange={changeUserName}
        type="text"
        placeholder="User Name"
      ></input>
      <input className="form-input"
        value={password}
        onChange={changePassword}
        type="password"
        placeholder="Password"
      ></input>
      <input className="form-input"
        value={confirm}
        onChange={changeConfirm}
        type="password"
        placeholder="Re-Enter Password"
      ></input>
      <button className="submit-button">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
