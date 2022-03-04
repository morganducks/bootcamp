
import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Word from './components/Word'


function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
        {/* collect word or other /:params from user input, pass to Word.js. Can see how adding other selectors would make this way more user-friendly */}
        <Route path="/:wordSelected" element={<Word />}/>
        <Route path="/:wordSelected/:colorSelected/:backgroundSelected" element={<Word />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
