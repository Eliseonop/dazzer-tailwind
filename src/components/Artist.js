import React, { useEffect, useState } from "react";
import { buscarMusicaName } from "../api/apiSearch";

function Artist({ artistaObtenido, enviarId, enviarPlayer, obtenerPlayer }) {
  const valor = obtenerPlayer();
  const [play, setPlay] = useState(false);
  const [artistas, setArtistas] = useState(false);

  const name = artistaObtenido();
  const getFuncion = async (nombre) => {
    try {
      const data = await buscarMusicaName(nombre);
      let obj = [];
      for (var i = 0; i < 1; i++) {
        obj = data[i];
      }
      setArtistas(obj);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getFuncion(name);
  }, [name]);

  const PlayPause = () => {
    enviarId(artistas.id);
    setPlay(!play);
    enviarPlayer(!valor);
  };
  return artistas ? (
    <div className="  flex flex-col lg:w-full lg:flex lg:flex-row">
      <div className="w-250 h-250 hidden lg:flex relative">
        <img
          src={artistas.artist.picture_medium}
          alt={artistas.artist.id}
          width={250}
          className="lg:w-[250px] lg:h-[250px] "
        />
        {/* <button className="absolute top-1/3 left-1/3 z-10 h-[100px] w-[100px] bg-transparent text-white border-none ">
            {artistas ? (
              <i className="fa-solid fa-pause cursor-pointer text-[80px]"></i>
            ) : (
              <i className="fa-solid fa-play cursor-pointer text-[80px]"></i>
            )}
          </button> */}
      </div>
      <div className=" relative md:mx-auto ">
        <img
          src={artistas.artist.picture_xl}
          className="object-cover object-top  h-[250px] grayscale brightness-50 sepia hue-rotate-[-50deg] saturate-600 contrast-8 "
          alt={artistas.artist.name}
          width={642}
          height={250}
        />
        <div className="absolute top-0 text-white ml-5 ">
          <h1 className="text-xl font-bold mt-3">{artistas.title}</h1>
          <h3 className="font-extralight">
            Lo mejor de {artistas.artist.name}
            <span className="font-bold mx-2 text-black ">
              {artistas.rank} rank
            </span>
          </h3>
          <button
            onClick={PlayPause}
            className="mt-14 ml-5 px-5 py-2 rounded-2xl bg-red-500 text-white border-0 transition hover:bg-transparent hover:border-2 hover:border-red-600"
          >
            {play ? "Pausar" : "Reproducir"}
          </button>
          <button className="mt-14 ml-5 px-5 py-2 rounded-2xl bg-red-500 text-white border-0 transition hover:bg-transparent hover:border-2 hover:border-red-600">
            Seguir
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="  flex flex-col lg:w-full lg:flex lg:flex-row">
      <div className="w-250   h-250 hidden animate-pulse lg:flex bg-slate-200 relative justify-center items-center">
        <div className="lg:w-[240px] lg:h-[240px]    "></div>
        {/* <button className="absolute top-1/3 left-1/3 z-10 h-[100px] w-[100px] bg-transparent text-white border-none ">
            {artistas ? (
              <i className="fa-solid fa-pause cursor-pointer text-[80px]"></i>
            ) : (
              <i className="fa-solid fa-play cursor-pointer text-[80px]"></i>
            )}
          </button> */}
      </div>
      <div className=" relative md:mx-auto shadow animate-pulse">
        <div className="object-cover object-top  w-[642px] h-[250px] grayscale brightness-50 sepia hue-rotate-[-50deg] saturate-600 contrast-8 "></div>
        <div className="absolute top-0 text-white ml-5 ">
          <div className="h-5 mt-7 bg-slate-200 rounded-lg"></div>
          <h3 className="font-extralight mt-8">
            <span className="font-bold mx-2 mt-8  text-slate-200 bg-slate-200 w-8  rounded-lg">
              Aqui va el rank
            </span>
          </h3>
          <button
            onClick={PlayPause}
            className="mt-14 ml-5 px-5 py-2 rounded-2xl bg-slate-200 text-white border-0 transition hover:bg-transparent hover:border-2 hover:border-red-600"
          >
            Reproducir
          </button>
          <button className="mt-14 ml-5 px-5 py-2 rounded-2xl bg-slate-200   text-white border-0 transition hover:bg-transparent hover:border-2 hover:border-red-600">
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Artist);
