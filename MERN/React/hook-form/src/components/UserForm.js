import React, {useState} from 'react';

const UserForm = (props) => {
   
    //destructure from APP
const {firstName,setFirstName,lastName,setLastName, email,setEmail,password,setPassword,confirmPassword,setConfirmPassword} = props;

const [firstNameError, setFirstNameError] = useState("");
const [lastNameError, setLastNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");

const handleFirstName = (e) => {
    setFirstName(e.target.value);

    if(e.target.value.length < 2) {
        setFirstNameError("First name must have at least 2 characters")
    }
    else {
        setFirstNameError("")
    }
}

const handleLastName = (e) => {
    setLastName(e.target.value);

    if(e.target.value.length < 3) {
        setLastNameError("Last name must have at least 3 characters")
    }
    else {
        setLastNameError("")
    }
}

const handleEmail = (e) => {
    setEmail(e.target.value);

    if(e.target.value.length < 4) {
        setEmailError("Email must be at least 5 characters")
    }
    else {
        setEmailError("")
    }
}


const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
        setPasswordError("Passwords must be 8 characters")
    }
    else {
        setPasswordError("")
    }
}

const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if(e.target.value !== password) {
        setConfirmPasswordError("Passwords must match!")
    }
    else {
        setConfirmPasswordError("")
    }
}

return(
    <form>
  <div>
      <label>First Name:</label>
      <input type="text" onChange={(e) => {
    handleFirstName(e);  
}
}
/>
 {
     firstNameError ?
     <p>{firstNameError}</p>
     :null
 }

      </div>
      <div>
      <label>Last Name:</label>
      <input type="text" onChange={(e) => {
    handleLastName(e);  
}
}
/>
 {
     lastNameError ?
     <p>{lastNameError}</p>
     :null
 }
 
   </div>
  <div>
      <label>Email:</label>
      <input type="text" onChange={(e) => { 
          handleEmail(e) 
          }} />
 {
     emailError ?
     <p>{emailError}</p>
     :null
 }

  </div>
  <div>


      <label>Password:</label>
      <input type="text" onChange={(e) => {
        handlePassword(e)}} />
     {
     passwordError ?
     <p>{passwordError}</p>
     :null
 }
  </div>
  <div>
      <label>Confirm Password:</label>
      <input type="text" onChange={(e) => { 
          handleConfirmPassword(e)
    }} />

     {
     confirmPasswordError ?
     <p>{confirmPasswordError}</p>
     :null
 }
  </div>
</form>

  
)
}




export default UserForm;