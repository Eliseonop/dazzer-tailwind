import React from "react";
import logo from "../assets/Foxbel-Music/foxbel-music.png";
import "../style/views/NavTab.css";

export default function NavTab() {
  return (
    <div className="container-nav ">
      <img
        src={logo}
        alt="logo"
        width={250}
        height={59}
        className="div-imagen "
      />

      <div className="pl-8">
        <h4 className="">Mi Libreria</h4>
        <ul>
          <li className="">Recientes</li>
          <li className="">Artistas</li>
          <li className="">Albums</li>
          <li className="">Canciones</li>
          <li className="">Estaciones</li>
        </ul>
      </div>
      <div className="pl-8">
        <h4 className="">Playlist</h4>
        <ul>
          <li className="">Metal</li>
          <li className="">Playlist</li>
          <li className="">Albums</li>
          <li className="">Canciones</li>
          <li className="">Estaciones</li>
        </ul>
      </div>
    </div>
  );
}
