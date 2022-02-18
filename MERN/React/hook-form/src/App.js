import React, {useState} from 'react';
import './App.css';
import UserForm from './components/UserForm'
import DisplayChange from './components/DisplayChange'


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="App">
      <UserForm 
      //make these vars available in component
      firstName = {firstName}
      lastName = {lastName}
      email = {email}
      password = {password}
      confirmPassword = {confirmPassword}
      setFirstName = {setFirstName}
      setLastName = {setLastName}
      setEmail = {setEmail}
      setPassword = {setPassword}
      setConfirmPassword = {setConfirmPassword}
      />
    <DisplayChange 
    //make these vars available in component. Need only setters because they are the only vars used in this component
      firstName = {firstName}
      lastName = {lastName}
      email = {email}
      password = {password}
      confirmPassword = {confirmPassword}
      />
    </div>
  );
}

export default App;
