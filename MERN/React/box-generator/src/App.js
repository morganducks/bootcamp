import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Colors from './components/Colors'

function App() {


  const [boxList, setBoxList] = useState([])




  return (
    <div className="App">
<Form 
// makes the state values available to child components
boxList = { boxList } 
setBoxList = { setBoxList }
/>
<Colors 
boxList = { boxList } 
setBoxList = { setBoxList }
/>
    </div>
  );
}

export default App;
