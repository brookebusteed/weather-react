import "./App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <h1 className="header"> Weather React App</h1>
      <Search />
      <p>
        This project is{" "}
        <a href="https://github.com/brookebusteed/weather-react">
          open-sourced
        </a>
        , by <a href="https://github.com/brookebusteed">Brooke Busteed</a>
      </p>
    </div>
  );
}

export default App;
