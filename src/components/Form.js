import React, { useState } from "react";

export default function Form() {
  const [amigo, setAmigo] = useState("");

  return (
    <div>
      {/* form of login */}
      <form>
        <label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={amigo}
            onChange={(e) => setAmigo(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
