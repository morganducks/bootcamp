const noMondays = new Promise( (resolve, reject) => {
        if(new Date().getDay() !== 2) {
            resolve("Good, it's not Tuesday!");
        } else {
            reject("Someone has a case of the Mondays!");
        }
    });
    noMondays
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    


    
import './App.css';
import React, {useEffect, useState} from 'react'

// function App() {

//     const [pokemonNames, setPokemonNames] = useState([]); 
    
//     useEffect(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
//         .then(response => {
//           return response.json()
//         })
//         .then(response => { 
//           setPokemonNames(response.results)
//         })

//       .catch((err) => {
//             console.log(err);
//           })
//     }, []);
    
function App() {
  // We expect an array of pokemon objects back and so we will
  //    choose an empty array as the initial value to be held
  //    in state
  const [pokemon, setPokemon] = useState([]);

  // this will run immediately after the JSX is rendered
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        // this will return the data from the response object
        //    in a json format
        return response.json()
      })
      .then(response => {
        // store the json converted data in state so it can be displayed
        setPokemon(response.results)
      })
      .catch((err) => {
        console.log(err);
      })
    }, []);  

        return(
        <div className="App">
      <ul>
        {
          //getter then map 
          pokemonName.map((pokemonNamesObj, index)=>{
            return (<li key={index}>{pokemonNamesObj.name}</li>)
          })
        }
      </ul>
    </div>
    
        );


    
}

export default App;
