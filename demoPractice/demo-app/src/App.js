import "./App.css";
import Greeting from "./components/greeting";
import Bravo from "./components/bravo";
import Charlie from "./components/Charlie";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  };

  let peopleDisplay = people.map((person, index) => {
    return (
      <div>
        <h3>
          {person.name}, age {person.age}
        </h3>
        {person.creditScore < 600 ? (
          <h4 className="bad-score">You have a bad credit score</h4>
        ) : (
          <h4 className="good-score">You have a real nice score!</h4>
        )}
      </div>
    );
  });

  // let myPeople = [
  //   {
  //     name: "Tobin",
  //     age: 29,
  //     isCool: false,
  //   },
  //   {
  //     name: "Billy",
  //     age: 25,
  //     isCool: true,
  //   },
  //   {
  //     name: "Bobby",
  //     age: 19,
  //     isCool: true,
  //   },
  // ];

  // let peopleDisplay = myPeople.map((person) => {
  //   return <Greeting personalInfo={person} />;
  // });

  return (
    <div className="App">
      <Charlie addPerson={addPerson} />
      {peopleDisplay}
      {/* <h1>These are my people!</h1>
      {peopleDisplay}
      <br />
      <Bravo /> */}
    </div>
  );
}

export default App;
