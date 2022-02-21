import React from 'react';

const DisplayChange = (props) => {
 
    //destructure from APP
    const {firstName,setFirstName,lastName,setLastName, email,setEmail,password,setPassword,confirmPassword,setConfirmPassword} = props;


    
    return(
        <div>
            <p>{firstName}</p>

            <p>{lastName}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmPassword}</p>
        </div>
    )
}

export default DisplayChange;