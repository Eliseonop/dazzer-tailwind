import { createContext, useContext, useState } from "react";

export const ArtistContext = createContext();

export default function ArtistProvider({ children }) {
  const [player, setPlayer] = useState(false);
  const [artist, setArtist] = useState("eminen");
  const [id, setId] = useState(737940772);
  const enviarPlayer = (valor) => {
    setPlayer(valor);
  };
  const obtenerPlayer = () => {
    return player;
  };
  const enviarId = (r) => {
    setId(r);
  };
  const obtenerId = () => {
    return id;
  };
  const artistaObtenido = () => {
    return artist;
  };
  const enviarArtist = (a) => {
    setArtist(a);
  };
  return (
    <ArtistContext.Provider
      value={{
        enviarId,
        enviarArtist,
        artistaObtenido,
        obtenerId,
        enviarPlayer,
        obtenerPlayer,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
}
