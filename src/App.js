import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./SearchBar";
import Features from "./Features";

function App() {
  return (
    <div className="App">
      <div className="header">
        <SearchBar />
        <Features />
      </div>
    </div>
  );
}

export default App;
