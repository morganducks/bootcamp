import React, {useState} from 'react';

const Users = (props) => {


    const {firstName,lastName,age,hairColor} = props;


    //      getter     setter   pulls in age to change

    const [currentAge,addToAge] = useState(age);
  
    //getOlder tells addToAge to run
    
    const getOlder = () => addToAge(currentAge + 1);

    return (
        <div>
            <h1>
                Name: { firstName } { lastName }
            </h1>
            <p>
                Age: { currentAge }
            </p>
            <p>
               Hair color: {hairColor}
            </p>
            <button onClick={ (getOlder) }>Get older</button>
        </div>
    );
}
export default Users;