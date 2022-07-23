import React from "react";
import { useEffect, useState } from "react";
import unicoPersonaje from "../funciones/unicouser";
import { useParams } from "react-router-dom";

const Personaje = () => {
  const [personajes, setPersonajes] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    unicoPersonaje(id, setPersonajes);
    
  }, []);

  
  

  return (
    <>
      {personajes !== null ? (
        <div className="container">
          <div className="user">
          <img  src={personajes.image} alt="#"></img>
            <h1>{personajes.name}</h1>
            <p>{personajes.species}</p>
            {personajes.status=== "Alive"
            ? <p><span></span>{personajes.status}</p>
            : <p><span className="span2"></span>{personajes.status}</p>}
            <p>{personajes.gender}</p>
            <p>{personajes.origin.name}</p>
          </div>
        </div>
      ) : (
        "no hay personajes"
      )}
    </>
  );
};

export default Personaje;
