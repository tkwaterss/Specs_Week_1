import React, { useState } from "react";

const AccountPage = (props) => {
  const [listItem, setListItem] = useState("");
  let { account } = props;

  const trackListItem = (event) => setListItem(event.target.value);

  const addHandler = (event) => {
    event.preventDefault();
    account.toDoList.push(listItem);
    setListItem('');
  };

  let listItems = account.toDoList.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div>
      <form onSubmit={addHandler}>
        <input
          onChange={trackListItem}
          value={listItem}
          type="text"
          placeholder="enter to-do item"
        ></input>
        <button>Add</button>
      </form>
      <ul>{listItems}</ul>
    </div>
  );
};

export default AccountPage;
