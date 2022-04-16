import "./App.css";
import { useState } from "react";
import NavTab from "./views/NavTab";
// import { Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";

import ArtistProvider from "./context/ArtistProvider";
import Reproductor from "./views/Reproductor";
import Login from "./components/Login";

function App() {
  // buscar usuario en login
  const [user, setUser] = useState(window.localStorage.getItem("user"));
  // window.localStorage.setItem("user", "edu");
  return (
    <>
      <ArtistProvider>
        {user ? (
          <div className="flex flex-col   lg:flex-row">
            <NavTab />
            <Home />

            <Reproductor />
          </div>
        ) : (
          <Login />
        )}
      </ArtistProvider>
    </>
  );
}

export default App;
