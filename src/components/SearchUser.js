import React, { useState, useContext, useEffect } from "react";
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
      <div className="w-870 flex h-120 items-center justify-between ">
        <div className=" flex h-25">
          <form onSubmit={submit}>
            <input
              placeholder="Buscar"
              className="w-640 rounded-xl p-1"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
            <i class="fa-solid fa-magnifying-glass  relative right-5 mt-1 text-gray-600 "></i>
          </form>
        </div>
        <div className="flex">
          <i class="fas fa-regular fa-user mt-1 text-red-600"></i>
          <h3 className="ml-[10px]">Francisco</h3>
        </div>
      </div>
    </>
  );
}
