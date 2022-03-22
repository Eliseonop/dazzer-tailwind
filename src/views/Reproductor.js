import React, { useState, useEffect, useRef, useContext } from "react";
import { getApiTrack } from "../api/apiTrack";
import { ArtistContext } from "../context/ArtistProvider";

export default function Reproductor() {
  const [music, setMusic] = useState({ preview: 737940772 });
  console.log(music);
  const { obtenerId, obtenerPlayer, enviarPlayer } = useContext(ArtistContext);
  const [play, setPlay] = useState(true);
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
  const PlayPause = () => {
    setPlay(!play);
    // play ? audioPlay.current.play() : audioPlay.current.pause();
  };

  useEffect(() => {
    getTrack(id);
  }, [id]);

  useEffect(() => {
    valor ? audioPlayer.current.play() : audioPlayer.current.pause();
  }, [valor]);
  return (
    <div className="fixed h-[100px] bottom-0 bg-[#EB5757] w-screen ">
      <audio
        ref={audioPlayer}
        src={music.preview}
        type="audio/mpeg"
        controls
      ></audio>
      <button></button>
    </div>
  );
}
