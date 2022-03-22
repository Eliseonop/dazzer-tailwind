import React, { useState, useEffect, useRef } from "react";
import { getApiTrack } from "../api/apiTrack";

export default function Reproductor({ obtenerId, obtenerPlayer }) {
  const [music, setMusic] = useState({ preview: 737940772 });
  console.log(music);

  const audioPlayer = useRef();

  const id = obtenerId();

  const valor = obtenerPlayer();
  const getTrack = async (a) => {
    try {
      const data = await getApiTrack(a);
      setMusic(data);
      audioPlayer.current.play();
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getTrack(id);
  }, [id]);
  useEffect(() => {
    valor ? audioPlayer.current.play() : audioPlayer.current.pause();
  }, [valor]);
  return (
    <div>
      Reproductor
      <audio
        ref={audioPlayer}
        src={music.preview}
        type="audio/mpeg"
        controls
      ></audio>
    </div>
  );
}
