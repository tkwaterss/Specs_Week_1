import React, { useState } from "react";
import "./AccountPage.css";

const AccountPage = (props) => {
  const [listItem, setListItem] = useState("");
  let { account } = props;

  const trackListItem = (event) => setListItem(event.target.value);

  const addHandler = (event) => {
    event.preventDefault();
    account.toDoList.push(listItem);
    setListItem("");
  };

  let listItems = account.toDoList.map((item, index) => {
    return (
      <li key={index} className="todo-list-item">
        {item}
      </li>
    );
  });

  return (
    <div className="todo-container">
      <form onSubmit={addHandler} className="todo-form">
        <input
          onChange={trackListItem}
          value={listItem}
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
