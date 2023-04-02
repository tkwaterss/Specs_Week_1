import React, { useContext, useRef } from "react";
import AccountContext from "../../state/AccountContext";
import "./AccountPage.css";

const AccountPage = () => {
  const { accountState } = useContext(AccountContext);
  const listItemRef = useRef();

  const addHandler = (event) => {
    event.preventDefault();
    accountState.account.toDoList.push(listItemRef.current.value);
    //!This needs to be switched to a dispatch I think
    listItemRef.current.value = "";
  };

  let listItems = accountState.account.toDoList.map((item) => {
    return (
      <li key={Math.random()} className="todo-list-item">
        {item}
      </li>
    );
  });

  return (
    <div className="todo-container">
      <form onSubmit={addHandler} className="todo-form">
        <input
          ref={listItemRef}
          type="text"
          placeholder="enter to-do item"
          className="add-todo-input"
        ></input>
        <button className="add-todo-button">Add</button>
      </form>
      <div className="list-container">
        <h3>To Do List:</h3>
        <ul className="todo-list">{listItems}</ul>
      </div>
    </div>
  );
};

export default AccountPage;
