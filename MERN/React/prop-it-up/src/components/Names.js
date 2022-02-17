import React from 'react';
    
const Names = (props) => {

    const {firstName,lastName,age,hairColor} = props;
    return (
        <div>
            <h1>
                { firstName } { lastName }
            </h1>
            <p>
                Age: { age }
            </p>
            <p>
               Hair color: {hairColor}
            </p>
        </div>
    );
}
export default Names;



