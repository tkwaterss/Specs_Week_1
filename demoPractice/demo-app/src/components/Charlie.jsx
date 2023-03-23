import React, { useState } from "react";

const Charlie = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [creditScore, setCreditScore] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleScore = (e) => setCreditScore(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const person = { name, age, creditScore };

    props.addPerson(person);

    setName('');
    setAge(0);
    setCreditScore(0);
  };

  return (
    <div>
      <h1>Charlie</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleName}
          type="text"
          placeholder="name"
          value={name}
        ></input>
        <input
          onChange={handleAge}
          type="number"
          placeholder="age"
          value={age}
        ></input>
        <input
          onChange={handleScore}
          type="number"
          placeholder="credit score"
          value={creditScore}
        ></input>
        <button type="submit">Add</button>
        <button type="button">Reset</button>
      </form>
    </div>
  );
};

export default Charlie;
