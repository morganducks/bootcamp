import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NumberPage = (props) => {
    
    const {numSelected} = useParams();

    return(
    <div>
      <h1>{numSelected}</h1>
      <p>test</p>
    <Link to="/"><p>Home</p></Link>
    </div>
    )

}

export default NumberPage;