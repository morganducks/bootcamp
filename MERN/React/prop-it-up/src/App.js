import React from 'react'
import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person 
      firstName = { "Paul" }
      lastName = { "Morgan" }
      age = { 52 }
      hairColor   = { "Gray" } 
      />
      <Person 
      firstName = { "Brian" }
      lastName = { "Campbell" }
      age = { 45 }
      hairColor   = { "Brown" } 
      />
      <Person 
      firstName = { "Annie" }
      lastName = { "Cumberbatch" }
      age = { 27 }
      hairColor   = { "Blonde" } 
      />
      <Person 
      firstName = { "Jack" }
      lastName = { "Reacher" }
      age = { 36 }
      hairColor   = { "Blue" } 
/>
    </div>
  );
}

export default App;
