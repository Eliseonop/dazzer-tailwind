import React, { useState, useContext, useEffect } from "react";
import { ArtistContext } from "../context/ArtistProvider";

import "../style/components/SearchUser.css";

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
      <div className="div-search ">
        <div className=" div-input">
          <form onSubmit={submit}>
            <input
              placeholder="Buscar"
              className="Buscar"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
            <i class="fa-solid fa-magnifying-glass  icon "></i>
          </form>
        </div>
        <div className="div-user ">
          <i class="fas fa-regular fa-user "></i>
          <h3>Francisco</h3>
        </div>
      </div>
    </>
  );
}
