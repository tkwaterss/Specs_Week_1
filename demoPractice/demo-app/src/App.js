import "./App.css";
import Greeting from "./components/greeting";

function App() {
  let greeting = "Get Lost";
  let name = "Tobin";
  return (
    <div className="App">
      <Greeting />
      <Greeting />
    </div>
  );
}

export default App;
