import "./App.css";
import Greeting from "./components/greeting";

function App() {
  let myPeople = [
    {
      name: "Tobin",
      age: 29,
      isCool: false
    },
    {
      name: "Billy",
      age: 25,
      isCool: true
    },
    {
      name: "Bobby",
      age: 19,
      isCool: true
    },
  ]
 
  let peopleDisplay = myPeople.map(person => {
    return <Greeting personalInfo={person} />
  })

  return (
    <div className="App">
      <h1>These are my people!</h1>
      {peopleDisplay}
    </div>
  );
}

export default App;
