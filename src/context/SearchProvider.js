import React, { useState, createContext, useEffect } from "react";
import { buscarMusicaName } from "../api/apiSearch";
export const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [search, setSearch] = useState([]);
  const [resultado, setResultado] = useState(null);
  const enviarId = (id) => {
    setSearch(id);
  };
  return (
    <SearchContext.Provider value={{ resultado, enviarId }}>
      {children}
    </SearchContext.Provider>
  );
}
