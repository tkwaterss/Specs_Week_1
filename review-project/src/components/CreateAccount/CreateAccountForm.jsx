import React, { useRef } from "react";
import "./CreateAccountForm.css";

const CreateAccountForm = (props) => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== confirmRef.current.value) {
      alert("please enter matching passwords");
    } else {
      let newUser = {
        userName: userNameRef.current.value,
        password: passwordRef.current.value,
        toDoList: ["test item"],
      };
      props.addAccount(newUser);
    }

    userNameRef.current.value = "";
    passwordRef.current.value = "";
    confirmRef.current.value = "";
    userNameRef.current.focus();
  };

  //TODO add a function that logs into account upon creation

  return (
    <form className="create-account-form" onSubmit={submitHandler}>
      <h2>Enter New Account Info:</h2>
      <input
        className="form-input"
        ref={userNameRef}
        type="text"
        placeholder="User Name"
      ></input>
      <input
        className="form-input"
        ref={passwordRef}
        type="password"
        placeholder="Password"
      ></input>
      <input
        className="form-input"
        ref={confirmRef}
        type="password"
        placeholder="Re-Enter Password"
      ></input>
      <button className="submit-button">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
