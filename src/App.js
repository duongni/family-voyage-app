import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="header">
        <SearchBar />
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
