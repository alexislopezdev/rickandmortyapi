
 const logica= async(state)=> {
  await fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        const personData = data.results;
        state(personData);
      })};


      
  export default logica;


