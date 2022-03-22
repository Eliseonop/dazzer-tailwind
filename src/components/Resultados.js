import React, { useState, useEffect } from "react";
import CardMusic from "./CardMusic";
import { buscarMusicaName } from "../api/apiSearch";
import "../style/components/Resultados.css";

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
  console.log(artistas);
  useEffect(() => {
    console.log(name);
    getFuncion(name);
  }, [name]);

  return (
    <div className="div-resultados">
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
