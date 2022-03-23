import React, { useState, useEffect } from "react";
import CardMusic from "./CardMusic";
import { buscarMusicaName } from "../api/apiSearch";

function Resultados({
  artistaObtenido,
  enviarId,
  enviarPlayer,
  obtenerPlayer,
}) {
  const [artistas, setArtistas] = useState(false);

  const name = artistaObtenido();
  const getFuncion = async (nombre) => {
    try {
      const data = await buscarMusicaName(nombre);
      const numero = data.length;
      let obj = [];
      if (numero > 10) {
        for (var i = 0; i < 10; i++) {
          obj.push(data[i]);
        }
        console.log(obj);
        if (obj !== undefined) {
          setArtistas(obj);
        } else {
          setArtistas(false);
        }
      } else {
        for (var e = 0; e < numero; e++) {
          obj.push(data[e]);
        }
        console.log(obj);
        if (obj !== undefined) {
          setArtistas(obj);
        } else {
          setArtistas(false);
        }
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getFuncion(name);
  }, [name]);

  return (
    <div className="flex flex-wrap w-screen mb-20 lg:w-full md:px-auto ">
      <h2 className="w-full mt-2 text-[#E86060] text-[22px] font-bold lg:mt-5">
        Resultados
      </h2>
      {artistas ? (
        artistas.map((item, index) => (
          <CardMusic
            item={item}
            key={index}
            enviarId={enviarId}
            enviarPlayer={enviarPlayer}
            obtenerPlayer={obtenerPlayer}
          />
        ))
      ) : (
        <div className="flex items-center justify-center mt-4 w-full h-128">
          <div className="bg-slate-200 h-128 w-4/5 flex items-center justify-center ">
            <span class="flex h-11 w-11">
              <span class="animate-ping  inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
export default React.memo(Resultados);
