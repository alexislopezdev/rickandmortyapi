const unicoPersonaje = async (id,state) => {
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const persoData = data;
        state(persoData);
      });
  };

  export default unicoPersonaje;