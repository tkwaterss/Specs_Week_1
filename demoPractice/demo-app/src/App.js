import "./App.css";
import Greeting from "./components/greeting";
import Bravo from "./components/bravo";
import Charlie from "./components/Charlie";
import { useState } from "react";
import List from './components/list';

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  };

  return (
    <div className="App">
      <Charlie addPerson={addPerson} />
      <List people={people}/>
    </div>
  );
}

export default App;
