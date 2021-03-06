import React, { useEffect, useContext } from "react";

import Artist from "../components/Artist";
import Resultados from "../components/Resultados";
import SearchUser from "../components/SearchUser";
import { ArtistContext } from "../context/ArtistProvider";

export default function Home() {
  const { artistaObtenido, enviarId, obtenerPlayer, enviarPlayer } =
    useContext(ArtistContext);

  useEffect(() => {}, []);
  return (
    <div className=" flex flex-col w-full lg:w-[970px]  lg:mx-auto">
      <SearchUser />
      <Artist
        enviarPlayer={enviarPlayer}
        artistaObtenido={artistaObtenido}
        enviarId={enviarId}
        obtenerPlayer={obtenerPlayer}
      />
      <Resultados
        enviarPlayer={enviarPlayer}
        artistaObtenido={artistaObtenido}
        enviarId={enviarId}
        obtenerPlayer={obtenerPlayer}
      />
    </div>
  );
}
