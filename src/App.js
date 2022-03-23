import "./App.css";
import NavTab from "./views/NavTab";
// import { Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";

import ArtistProvider from "./context/ArtistProvider";
import Reproductor from "./views/Reproductor";

function App() {
  return (
    <>
      <ArtistProvider>
        <div className="flex flex-col w-screen  lg:flex-row">
          <NavTab />
          <Home />

          <Reproductor />
        </div>
      </ArtistProvider>
    </>
  );
}

export default App;
