import React, { useState, useRef, useEffect } from "react";

function CardMusic({ item, enviarId, enviarPlayer, obtenerPlayer }) {
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
    <div className="flex w-40 h-52 flex-col justify-center items-center mt-3 mr-5 mb-[30px] lg:mx-3 relative">
      <img
        src={album.cover_medium}
        alt={title}
        width={160}
        className="w-[160px] h-[160px] border-2  "
      />
      <audio
        ref={audioPlay}
        id="audio"
        src={preview}
        type="audio/mpeg"
        controls
        className="w-[150px] h-[20px] hidden"
      ></audio>
      <button
        onClick={PlayPause}
        className="absolute h-[100px] text-white w-[100px] bg-transparent border-none z-10"
      >
        {play ? (
          <i className="fa-solid fa-play cursor-pointer text-[50px]"></i>
        ) : (
          <i className="fa-solid fa-pause cursor-pointer text-[50px]"></i>
        )}
      </button>
      <div className="h-[20px]">
        <h5 className="text-[12px] font-bold">{title}</h5>
        <h6>{artist.name}</h6>
      </div>
    </div>
  );
}
export default React.memo(CardMusic);
