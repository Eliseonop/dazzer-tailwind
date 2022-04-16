import React, { useState, useContext } from "react";
import { ArtistContext } from "../context/ArtistProvider";

export default function SearchUser() {
  const { enviarArtist } = useContext(ArtistContext);
  const [state, setstate] = useState({ name: "" });
  const [click, setClick] = useState(false);
  const { name } = state;
  const submit = (e) => {
    e.preventDefault();
    enviarArtist(name);
    setstate({ name: "" });
  };

  const handleChange = (e) => {
    setstate({ [e.target.name]: e.target.value });
  };

  const userData = window.localStorage.getItem("user");
  // logut localstorage
  const logout = () => {
    window.localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <div className="w-screen lg:w-full h-30 lg:h-[120px] items-center lg:place-content-between mb-4 flex flex-col-reverse lg:flex-row">
        <div className=" flex  ">
          <form onSubmit={submit} className="flex relative  ">
            <input
              placeholder="Buscar ejempl: name ,Rosalia, Drake"
              className="w-56 sm:w-640 lg:w-640 h-9 rounded-xl p-1 mt-1 border-2"
              type="text"
              maxLength={20}
              name="name"
              value={state.name}
              onChange={handleChange}
            />
            <i className="fa-solid fa-magnifying-glass  absolute right-3 mt-3 text-gray-400 "></i>
          </form>
        </div>
        <div className="flex mt-2 ">
          <div class="p-10">
            <div class="dropdown inline-block relative">
              <button
                class="bg-slate-100 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                onClick={() => setClick(!click)}
              >
                <i className="fas fa-regular fa-user  text-red-600"></i>
                <span class="mr-1">
                  {" "}
                  <h3 className="ml-[10px]">
                    {userData ? userData.replace(/['"]+/g, "") : "user"}{" "}
                  </h3>{" "}
                </span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul
                class={`dropdown-menu absolute ${
                  click ? "block" : "hidden"
                }   text-gray-700 pt-1`}
              >
                <li class="">
                  <span>
                    <button
                      onClick={logout}
                      className="text-red-600 bg-slate-100 font-bold py-2 px-8 rounded inline-flex items-center"
                    >
                      Salir
                    </button>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
