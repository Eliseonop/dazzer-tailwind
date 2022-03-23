import { createContext, useState } from "react";

export const ArtistContext = createContext();

export default function ArtistProvider({ children }) {
  const [player, setPlayer] = useState(true);
  const [artist, setArtist] = useState("drake");
  const [id, setId] = useState(1385358692);
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
