import React, {useState} from 'react';

const Form = (props) => {
   
    const [color, setColor] = useState("");


    const handleColor = (e) => {
        setColor("");
    }

    return (
        <div>
<h1>something</h1>
<form>
    <div>
        <input type="text" onchange={ (e) => {
            handleColor(e);
        } } >

        </input>
    </div>
</form>
</div>
    )
}

export default Form;