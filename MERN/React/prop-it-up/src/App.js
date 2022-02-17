import './App.css';
import Names from './components/Names'

function App() {
  return (
    <div className="App">
      <Names 
      firstName = { "Paul" }
      lastName = { "Morgan" }
      age = { 52 }
      hairColor   = { "Gray" } 
      />
      <Names 
      firstName = { "Brian" }
      lastName = { "Campbell" }
      age = { 45 }
      hairColor   = { "Brown" } 
      />
      <Names 
      firstName = { "Annie" }
      lastName = { "Cumberbatch" }
      age = { 27 }
      hairColor   = { "Blonde" } 
      />
      <Names 
      firstName = { "Jack" }
      lastName = { "Reacher" }
      age = { 36 }
      hairColor   = { "Blue" } 
      />
    </div>
  );
}

export default App;
