import React, { useState, useRef, useEffect } from "react";
import "../style/components/Card.css";

export default function CardMusic({
  item,
  enviarId,
  enviarPlayer,
  obtenerPlayer,
}) {
  const [play, setPlay] = useState(true);
  const audioPlay = useRef();
  //obtenemos el valor

  const { title, preview, artist, album, id } = item;
  const PlayPause = () => {
    enviarId(id);
    setPlay(!play);
    // play ? audioPlay.current.play() : audioPlay.current.pause();
  };
  useEffect(() => {
    enviarPlayer(!play);
  }, [play]);
  // console.log(item);
  return (
    <div className="card-div">
      <img src={album.cover_medium} alt={title} />
      <audio
        ref={audioPlay}
        id="audio"
        src={preview}
        type="audio/mpeg"
        controls
      ></audio>
      <button onClick={PlayPause}>
        {play ? (
          <i class="fa-solid fa-play"></i>
        ) : (
          <i class="fa-solid fa-pause"></i>
        )}
      </button>
      <h5>{title}</h5>
      <h6>{artist.name}</h6>
    </div>
  );
}
