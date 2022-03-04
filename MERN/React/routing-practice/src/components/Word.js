import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Word = (props) => {

//destructuring the params set in app.js
    const { wordSelected,colorSelected,backgroundSelected } = useParams();


    return (
        <div>
            {/* if input is not a number, then display with any params set by the user in the path */}
            {isNaN(wordSelected) ?
                <h1 style={{color: colorSelected, backgroundColor: backgroundSelected}}>The word is {wordSelected}</h1>
                : <h1>The number is {wordSelected}</h1>
            }
            <Link to="/"><p>Home</p></Link>
        </div>
    )

}

export default Word