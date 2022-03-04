import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
//              getter  setter       establishes useState as empty array
// anytime array changes useState changes
    const [pokemonNames, setPokemonNames] = useState([]); 
    
    //useEffect runs through 3 states on render or change: did mount, did update, will unmount
    useEffect(() => {

      //when I change the limit upwards I see a lot more pokemon 
      //when I set no limit I get about 20 results. Why? 
      fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
          //tells program to pull the json from API link above
          return response.json()
        })
        .then(response => { 
          //puts the results in pokemonNames
          setPokemonNames(response.results)
        })

      .catch((err) => {
            console.log(err);
          })
    }, []);
    

        return(
        <div className="App">
      <ul>
        {
          //getter then map places those elements in new object pokemonNamesObj
          pokemonNames.map((pokemonNamesObj, index)=>{
            //looks for the .name value and displays in a list
            return (<li key={index}>{pokemonNamesObj.name}</li>)
          })
        }
      </ul>
    </div>
    
        );


    
}

export default App;