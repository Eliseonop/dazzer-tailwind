import React, { useState } from "react";
import logo from "../assets/Foxbel-Music/foxbel-music.png";
import logo2 from "../assets/Foxbel-Music/foxbel-music-icon@2x.png";
export default function NavTab() {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [css, setCss] = useState("");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div
      className={
        toggleMenu
          ? " h-[300px]  flex w-screen  items-center content-between bg-dark-Red-s"
          : "h-[100px] lg:h-[1087px] lg:w-[330px] flex lg:flex-col w-screen items-center content-between bg-dark-Red-s "
      }
    >
      <img
        src={logo2}
        alt="logo"
        // width={250}
        // height={59}
        className="w-20 h-20 ml-5 lg:hidden "
      />
      <img
        src={logo}
        alt="logo"
        // width={250}
        // height={59}
        className=" hidden lg:block  mt-[50px] ml-[40px] mr-[40px] w-[250px] md:w-[200px] "
      />
      <div className="flex lg:flex-col justify-items-center   items-center lg:items-start ">
        <div className="mx-3 lg:mt-5 ">
          <h4 className="text-white text-vd font-bold">Mi Libreria</h4>
          <ul
            className={
              toggleMenu
                ? "flex flex-col"
                : "hidden lg:flex lg:flex-col lg:space-y-1 lg:mt-2"
            }
          >
            <li className="list-none text-white">Recientes</li>
            <li className="list-none text-white">Artistas</li>
            <li className="list-none text-white">Albums</li>
            <li className="list-none text-white">Canciones</li>
            <li className="list-none text-white">Estaciones</li>
          </ul>
        </div>
        <div className="mx-3 lg:mt-5">
          <h4 className="text-white text-vd font-bold">Playlist</h4>
          <ul
            className={
              toggleMenu
                ? "flex flex-col"
                : "hidden lg:flex lg:flex-col lg:space-y-1 lg:mt-2"
            }
          >
            <li className="list-none text-white">Metal</li>
            <li className="list-none text-white">Playlist</li>
            <li className="list-none text-white">Albums</li>
            <li className="list-none text-white">Canciones</li>
            <li className="list-none text-white">Estaciones</li>
          </ul>
        </div>
        <button onClick={toggleNav} className="absolute top-9  right-3">
          {!toggleMenu ? (
            <i className="fa-solid fa-bars  text-xl text-white "></i>
          ) : (
            <i className="fas fa-chevron-up fs-1 text-xl text-white "></i>
          )}
        </button>
      </div>
    </div>
  );
}
