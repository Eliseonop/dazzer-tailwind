import React, { useState, useEffect, useContext } from "react";
import Artist from "../components/Artist";
import Resultados from "../components/Resultados";
import SearchUser from "../components/SearchUser";
import { ArtistContext } from "../context/ArtistProvider";
import Reproductor from "./Reproductor";

export default function Home() {
  const { artistaObtenido, obtenerId, enviarId, obtenerPlayer, enviarPlayer } =
    useContext(ArtistContext);

  useEffect(() => {}, []);
  return (
    <div className="Home">
      <SearchUser />
      <Artist />
      <Resultados
        enviarPlayer={enviarPlayer}
        artistaObtenido={artistaObtenido}
        enviarId={enviarId}
        obtenerPlayer={obtenerPlayer}
      />
      <Reproductor obtenerId={obtenerId} obtenerPlayer={obtenerPlayer} />
    </div>
  );
}
