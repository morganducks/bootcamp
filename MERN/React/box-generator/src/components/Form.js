import React, {useState} from 'react';

const Form = (props) => {
   
    const [color, setColor] = useState("");


    const handleColor = (e) => {
        setColor(e.target.value);
    }
    


    return (
        <div>
<h1>something</h1>
<form>
    <div>
        <p>Color</p>
        <input type="text" onChange={ (e) => {
            handleColor(e);

        } } >

        </input>
        <div>{color}</div>
    </div>
</form>
</div>
    )
}

export default Form;