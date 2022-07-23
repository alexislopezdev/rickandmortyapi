import React from "react";
import logica from "../funciones/funciones";
import { useState, useEffect } from "react";

const Inicio = () => {
  const [Personaje, setPersonaje] = useState([]);

  useEffect(() => {
    logica(setPersonaje);
  }, []);

  return (
    <>
      <div className="title">
        <h1>Rick and Morty API</h1>
      </div>
      <div className="Container-inicio">
        {Personaje !== null
          ? Personaje.map((Personaje) => (
              <div className="Block" key={Personaje.id}>
                <a href={`/personaje/${Personaje.id}`}>
                  <img src={Personaje.image} alt="#"></img>
                  <p>{Personaje.name}</p>
                </a>
              </div>
            ))
          : "no hay personajes"}
      </div>
    </>
  );
};

export default Inicio;
