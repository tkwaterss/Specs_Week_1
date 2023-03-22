import React from "react";

const Greeting = (props) => {
  const {name, age, isCool} = props.personalInfo

  // if(name !== "Tobin") {
  //   return(
  //   <div>
  //     <h1>You'r not Tobin!</h1>
  //   </div>)
  // }

  return (
    <div>
      <h1>Greetings {name}</h1>
      <h2>Age: {age}</h2>
      <h3>{isCool ? "This person is dope" : "This person is pretty Lame"}</h3>
    </div>
  );
};

export default Greeting;
