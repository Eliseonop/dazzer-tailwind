import React, { useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
export default function Login() {
  const [user, setUser] = useState("");
  const [data, setData] = useLocalStorage("user", "");
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    setData(user);
  };

  return (
    // formulario para login dezzer
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="w-full md:w-1/3 bg-white rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex font-bold justify-center mt-6">
          <img
            className="h-20 w-20"
            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
            alt="imagelogin"
          />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4">
          {user ? user : "Tu usuario"}
        </h2>
        <div className="px-12 pb-10 flex flex-col">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                value={user}
                type="text"
                placeholder="Username"
                className="-mx-6   w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                onChange={handleChange}
              />
              <i className="ml-1 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
            </div>
          </div>
          {/* <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="password"
                placeholder="Password"
                className="-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
              <i className="ml-1 fill-current text-gray-400 tnext-xs z-10 fas fa-lock"></i>
            </div>
          </div> */}

          <button
            type="submit"
            className="w-1/2 mx-auto py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
