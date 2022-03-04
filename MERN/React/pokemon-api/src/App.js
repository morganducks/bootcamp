import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  //        getter        setter
  const [pokemonNames, setPokemonNames] = useState([]);


  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        //sets results from API into pokemonNames array
        setPokemonNames(response.data.results);
      })
      .catch((err => console.log(err)))
  }, []);


  return (
    <div className="App">
      <ul>
        {/* identifies data and creates new array, places in pokemon variable */}
        {pokemonNames.map((pokemon, index) => (
          // runs tells li to reference array and populate pokemon.value
          <li key={index}><a href={pokemon.url}>{pokemon.name}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default App;