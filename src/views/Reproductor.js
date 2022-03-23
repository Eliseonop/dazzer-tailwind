import React, { useState, useEffect, useRef, useContext } from "react";
import { getApiTrack } from "../api/apiTrack";
import { ArtistContext } from "../context/ArtistProvider";

export default function Reproductor() {
  // const [volumen, setVolumen] = useState();
  const [value, setValue] = useState({
    valor: 1,
  });

  const handleChange = (e) => {
    audioPlayer.current.volume = audioRef.current.valueAsNumber;
  };

  const [music, setMusic] = useState({
    preview:
      "https://cdns-preview-4.dzcdn.net/stream/c-494e7b0d5433c5225783fcace2fea3c5-3.mp3",
    album: {
      cover_medium: "https://api.deezer.com/album/233259802/image",
    },
    title: "Aleatorio",
  });
  const audioRef = useRef();
  const audioPlayer = useRef();
  // console.log(audioPlayer.target.volume);
  // audioPlayer.target.volume = 0;

  const { obtenerId, obtenerPlayer, enviarPlayer } = useContext(ArtistContext);
  const [play, setPlay] = useState(false);

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
    play ? audioPlayer.current.play() : audioPlayer.current.pause();
    setPlay(!play);
    enviarPlayer(!valor);
  };

  useEffect(() => {
    getTrack(id);
  }, [id]);

  useEffect(() => {
    valor ? audioPlayer.current.play() : audioPlayer.current.pause();
  }, [valor]);
  return music ? (
    <div className="fixed h-[100px] bottom-0 z-20  bg-[#EB5757] w-screen ">
      <div className="relative">
        <img
          src={music.album.cover_medium}
          alt={music.title}
          width={160}
          className="w-[100px] h-[100px] border-0  "
        />
        <audio
          ref={audioPlayer}
          src={music.preview}
          type="audio/mpeg"
          controls
        ></audio>
        <button
          onClick={PlayPause}
          className="absolute top-0 left-1/4 lg:left-1/2  h-[100px] w-[100px] bg-transparent text-white border-none z-10"
        >
          {valor ? (
            <i className="fa-solid fa-pause cursor-pointer text-[50px]"></i>
          ) : (
            <i className="fa-solid fa-play cursor-pointer text-[50px]"></i>
          )}
        </button>

        <input
          // value={value.valor}

          ref={audioRef}
          type="range"
          max="1"
          min="0"
          step="0.1"
          name="valumen"
          className="absolute top-10 right-20 "
          onChange={handleChange}
        />
        <span className="absolute top-7 text-white text-xl right-7">
          <i class="fa-solid fa-music"></i>
        </span>
      </div>
    </div>
  ) : (
    <h1>Hola</h1>
  );
}
