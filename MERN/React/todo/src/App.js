import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Display from './components/Display'



function App() {
//getter  setter = useState as an array
  const [todoList, setTodoList] = useState([]);

//makes attributes available to child components and assigns each a function

  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList}/>
      <Display todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
