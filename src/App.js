import "./App.css";
import NavTab from "./views/NavTab";
// import { Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import SearchProvider from "./context/SearchProvider";
import ArtistProvider from "./context/ArtistProvider";

function App() {
  return (
    <div className="grid">
      <ArtistProvider>
        <SearchProvider>
          <NavTab className="g" />
          <Home className="" />
        </SearchProvider>
      </ArtistProvider>
    </div>
  );
}

export default App;
