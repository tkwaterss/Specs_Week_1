import React, { useState } from "react";

const Bravo = () => {
  const [nameInput, setNameInput] = useState("Bill Billy");
  const [name, setName] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    setName(nameInput);
    
    setNameInput('');
  };

  const handleChange = (event) => {
    setNameInput(event.target.value);
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <form onSubmit={submitHandler}>
        <input
          value={nameInput}
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Click Me!</button>
      </form>
    </div>
  );
};

export default Bravo;
