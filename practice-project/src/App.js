import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div className={styles.appContainer}>
      <AddUser addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
