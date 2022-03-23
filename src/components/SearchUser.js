import React, { useState, useContext } from "react";
import { ArtistContext } from "../context/ArtistProvider";

export default function SearchUser() {
  const { enviarArtist } = useContext(ArtistContext);
  const [state, setstate] = useState({ name: "" });
  const { name } = state;
  const submit = (e) => {
    e.preventDefault();
    enviarArtist(name);
    setstate({ name: "" });
  };

  const handleChange = (e) => {
    setstate({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="w-screen lg:w-full h-30 lg:h-[120px] items-center lg:place-content-between mb-4 flex flex-col-reverse lg:flex-row">
        <div className=" flex  ">
          <form onSubmit={submit} className="flex relative  ">
            <input
              placeholder="Buscar"
              className="w-56 sm:w-640 lg:w-640 h-9 rounded-xl p-1 mt-1 border-2"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
            <i className="fa-solid fa-magnifying-glass  absolute right-3 mt-2 text-gray-400 "></i>
          </form>
        </div>
        <div className="flex mt-2 ">
          <i className="fas fa-regular fa-user mt-1 text-red-600"></i>
          <h3 className="ml-[10px]">Francisco</h3>
        </div>
      </div>
    </>
  );
}
