import React, {useState} from 'react';

const Form = (props) => {

    const {boxList,setBoxList} = props;

    //allow users to pick color, store value
    const [color, setColor] = useState("");
    const [width,setWidth] = useState("");
    const [height,setHeight] = useState("");

//grow a list

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleWidth = (e) => {
        setWidth(e.target.value);
    }

    const handleHeight = (e) => {
        setHeight(e.target.value);
    }
    
const submitHandler = (e) => {
    e.preventDefault();
    //start adding to array
    setBoxList([...boxList, {
        color: color,
        width: width + "px",
        height: height + "px",
    }]);
    setColor("");
    setWidth("");
    setHeight("");
}

    return (
        <div>
<h1>something</h1>
<form onSubmit={submitHandler}>
    <div>
        <label for="colorPicker">Color</label>
        <input type="text" name="colorPicker" onChange={ (e) => {
            handleColor(e);
        } } 
        value={color}
        />
                <label for="widthPicker">Width</label>
        <input type="text" name="widthPicker" onChange={ (e) => {
            handleWidth(e);
        } } 
        value={width}
        />
                <label for="heightPicker">Height</label>
        <input type="text" name="heightPicker" onChange={ (e) => {
            handleHeight(e);
        } } 
        value={height}
        />
        <button>Add box</button>

    </div>
</form>
</div>
    )
}

export default Form;