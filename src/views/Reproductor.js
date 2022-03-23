import React, { useState, useEffect, useRef, useContext } from "react";
import { getApiTrack } from "../api/apiTrack";
import { ArtistContext } from "../context/ArtistProvider";

export default function Reproductor() {
  const [volumen, setVolumen] = useState(1);
  const handleChange = (e) => {
    setVolumen(audioRef.current.valueAsNumber);
  };
  const handleClick = () => {
    if (volumen === 0) {
      setVolumen(1);
      audioPlayer.current.volume = volumen;
      audioRef.current.valueAsNumber = volumen;
    } else {
      setVolumen(0);
      audioPlayer.current.volume = volumen;
      audioRef.current.valueAsNumber = volumen;
    }
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
    audioPlayer.current.volume = volumen;
    audioRef.current.valueAsNumber = volumen;
  }, [volumen]);
  useEffect(() => {
    valor ? audioPlayer.current.play() : audioPlayer.current.pause();
  }, [valor]);
  // console.log(audioRef.current.valueAsNumber);
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
          className="absolute top-0 sm:left-20 md:left-28 lg:left-1/4 xl:left-1/3 h-[100px] w-[100px] bg-transparent text-white border-none z-10"
        >
          {valor ? (
            <i className="fa-solid fa-pause cursor-pointer text-[50px]"></i>
          ) : (
            <i className="fa-solid fa-play cursor-pointer text-[50px]"></i>
          )}
        </button>
        <div className="absolute top-8 right-2 md:right-1/4 lg:right-1/4 sm:right-1/4  xl:right-52 ">
          <input
            ref={audioRef}
            type="range"
            max="1"
            min="0"
            step="0.1"
            svalueAsNumber={volumen}
            name="valumen"
            className=" w-36 lg:w-90 sm:w-72 md:w-80 xl:w-[28rem] "
            onChange={handleChange}
          />
          <button
            onClick={handleClick}
            className=" text-white text-xl right-16  lg:ml-10"
          >
            {volumen === 0 ? (
              <i class="fa-solid fa-volume-xmark"></i>
            ) : (
              <i class="fa-solid fa-volume-high"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1>Hola</h1>
  );
}
