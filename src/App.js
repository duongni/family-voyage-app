import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./SearchBar";
import Features from "./Features";
import Cards from "./Cards";
function App() {
  return (
    <div className="App">
      <div className="header">
        <SearchBar />
        <Features />
        <Cards />
      </div>
    </div>
  );
}

export default App;
