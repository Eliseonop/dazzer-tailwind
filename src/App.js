import "./App.css";
import NavTab from "./views/NavTab";
// import { Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";

import ArtistProvider from "./context/ArtistProvider";
import Reproductor from "./views/Reproductor";

function App() {
  return (
    <div className="flex">
      <ArtistProvider>
        <NavTab className="g" />
        <Home className="w-full m-auto" />
        <Reproductor />
      </ArtistProvider>
    </div>
  );
}

export default App;
