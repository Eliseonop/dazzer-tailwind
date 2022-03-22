import React, { useEffect, useState } from "react";
import { getArtistId } from "../api/artistApi";

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
    <div className="w-970 mr-auto flex ">
      <div className="w-250 h-250">
        <img src={artist.picture_medium} alt={artist.id} />
      </div>
      <div className="w-640 ">
        <img
          src={artist.picture_xl}
          className="object-cover object-center h-[250px] grayscale brightness-50 sepia hue-rotate-[-50deg] saturate-600 contrast-8 "
          alt={artist.name}
          width={642}
          height={250}
        />
        <div className="absolute top-[200px] text-white ml-5 ">
          <h1 className="text-xl">{artist.name}</h1>
          <h3 className="font-extralight">
            Lo mejor de {artist.name}{" "}
            <span className="font-bold text-black ">
              {artist.nb_fan}seguidores
            </span>
          </h3>
          <button className="mt-14 ml-5 px-5 py-2 rounded-2xl bg-red-500 text-white border-0 transition hover:bg-transparent hover:border-2 hover:border-red-600">
            Reproducir
          </button>
          <button className="mt-14 ml-5 px-5 py-2 rounded-2xl bg-red-500 text-white border-0 transition hover:bg-transparent hover:border-2 hover:border-red-600">
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
}
