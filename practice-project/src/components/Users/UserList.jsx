import React from "react";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  const { users } = props;

  console.log(users);

  let userList = users.map((user) => {
    user.userAge = +user.userAge;
    return (
      <div className={styles.listItem} key={user.key}>
        <h4>{`${user.username} (${user.userAge} years old)`}</h4>
      </div>
    );
  });

  return <Card>{userList}</Card>;
};

export default UserList;
