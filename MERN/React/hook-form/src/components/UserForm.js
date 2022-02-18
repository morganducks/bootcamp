import React, {useState} from 'react';

const UserForm = (props) => {
   
    //destructure from APP
const {firstName,setFirstName,lastName,setLastName, email,setEmail,password,setPassword,confirmPassword,setConfirmPassword} = props;



return(
    <form>
  <div>
      <label>First Name:</label>
      <input type="text"  onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div>
      <label>Last Name:</label>
      <input type="text" onChange={(e) => setLastName(e.target.value)} />
  </div>
  <div>
      <label>Email:</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
  </div>
  <div>
      <label>Password:</label>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
  </div>
  <div>
      <label>Confirm Password:</label>
      <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
  </div>
</form>

  
)
}




export default UserForm;