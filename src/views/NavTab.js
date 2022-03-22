import React from "react";
import logo from "../assets/Foxbel-Music/foxbel-music.png";

export default function NavTab() {
  return (
    <div className="h-1087 w-330 bg-dark-Red-s">
      <img
        src={logo}
        alt="logo"
        width={250}
        height={59}
        className="mt-[50px] ml-[40px] mr-[40px]"
      />

      <div className="pl-[40px] mt-[49px]">
        <h4 className="text-white text-vd font-bold">Mi Libreria</h4>
        <ul>
          <li className="list-none text-white">Recientes</li>
          <li className="list-none text-white">Artistas</li>
          <li className="list-none text-white">Albums</li>
          <li className="list-none text-white">Canciones</li>
          <li className="list-none text-white">Estaciones</li>
        </ul>
      </div>
      <div className="pl-[40px] mt-[49px]">
        <h4 className="text-white text-vd font-bold">Playlist</h4>
        <ul>
          <li className="list-none text-white">Metal</li>
          <li className="list-none text-white">Playlist</li>
          <li className="list-none text-white">Albums</li>
          <li className="list-none text-white">Canciones</li>
          <li className="list-none text-white">Estaciones</li>
        </ul>
      </div>
    </div>
  );
}
