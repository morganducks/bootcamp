// Here we create the Header Component that will receive props and we know we want to have a users
//     first and last name
import React from 'react';
    
const Names = (props) => {
    return (
        <div>
            <h1>
                { props.firstName } { props.lastName }
            </h1>
            <p>
                Age: { props.age }
            </p>
            <p>
               Hair Color: {props.hairColor}
            </p>
        </div>
    );
}
export default Names;

