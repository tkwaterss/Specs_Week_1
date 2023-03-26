import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const { addUser } = props;
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState(0);

  const trackUsername = (event) => setUsername(event.target.value);
  const trackUserAge = (event) => setUserAge(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!username.trim() || !userAge.trim()) {
      alert("Please fill out all fields before submitting");
    } else if (+userAge < 0) {
      alert("Please enter a valid user age");
    } else {
      let newUser = {
        key: Math.random(),
        username: username,
        userAge: userAge,
      };
      addUser(newUser);

      setUsername("");
      setUserAge(0);
    }
  };

  return (
    <Card className={styles.formContainer}>
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={styles.inputLabel}>Username</label>
        <input
          className={styles.userInput}
          onChange={trackUsername}
          value={username}
          type="text"
        />
        <label className={styles.inputLabel}>Age (Years)</label>
        <input
          className={styles.userInput}
          onChange={trackUserAge}
          value={userAge}
          type="number"
        />
        <button className={styles.button}>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
