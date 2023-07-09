import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <SearchBar />
        </div>

        <Routes>
          <Route path="/search" element={<SearchPage />} />

          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
