import React from "react";
import "./Home.css";

const Home = (props) => {
  let { accounts } = props;

  let accountsList = accounts.map((account) => {
    return (
      <div className="account-div" key={Math.random()}>
        <h3>{account.userName}</h3>
        <ul className="account-list">
          {account.toDoList.map((item) => {
            return <li key={Math.random()}>{item}</li>;
          })}
        </ul>
      </div>
    );
  });

  return <div className="home">{accountsList}</div>;
};

export default Home;
