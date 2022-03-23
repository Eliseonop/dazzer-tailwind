import React, { useState, useEffect } from "react";
import CardMusic from "./CardMusic";
import { buscarMusicaName } from "../api/apiSearch";

export default function Resultados({
  artistaObtenido,
  enviarId,
  enviarPlayer,
  obtenerPlayer,
}) {
  const [artistas, setArtistas] = useState([]);

  const name = artistaObtenido();
  const getFuncion = async (nombre) => {
    try {
      const data = await buscarMusicaName(nombre);
      let obj = [];
      for (var i = 0; i < 10; i++) {
        obj.push(data[i]);
      }
      setArtistas(obj);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getFuncion(name);
  }, [name]);

  return (
    <div className="flex flex-wrap w-screen mb-20 lg:w-full md:px-auto ">
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
        <h1>espera</h1>
      )}
    </div>
  );
}
