import React, { useEffect, useState } from "react";
import { getArtistId } from "../api/artistApi";
import "../style/components/Artist.css";

export default function Artist() {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    (async () => {
      const artista = await getArtistId();
      // console.log(artista);

      setArtist(artista);
    })();
  }, []);

  return (
    <div className="w-890 mx-16 mt-5 flex div-artist">
      <div className="w-250 h-250 div-2-artist">
        <img src={artist.picture_medium} alt={artist.id} />
      </div>
      <div className="div3-artist">
        <img
          src={artist.picture_xl}
          alt={artist.name}
          width={642}
          height={250}
        />
        <div className="contenido">
          <h1 className="text-red-700 absolute top-4 left-4">{artist.name}</h1>
          <h3>
            Lo mejor de {artist.name} <span>{artist.nb_fan}seguidores</span>
          </h3>
          <button>Reproducir</button>
          <button>Seguir</button>
        </div>
      </div>
    </div>
  );
}
