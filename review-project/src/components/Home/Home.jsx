import React from "react";
import "./Home.css";

const Home = (props) => {
let {accounts} = props

let accountsList = accounts.map(account => {
    return (
        <div className="account-div">
            <h3>{account.userName}</h3>
            <ul className="account-list">
                {account.toDoList.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
})

  return (
    <div className="home">
      {accountsList}
    </div>
  );
};

//TODO I want a list of current accounts => display userName and first three todo list items

export default Home;
