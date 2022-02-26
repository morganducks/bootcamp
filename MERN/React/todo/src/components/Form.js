import React, {useState} from 'react';

const Form = (props) => {

//   getter gets the current value     setter updates
const {todoList, setTodoList} = props;

//state is a blank string
const [todoText, setTodoText] = useState("");

const submitHandler = (e) =>  {
    e.preventDefault();

    //Want todoText to be stored in todoList. Tells setTodoList to include two keys in the array entry
        setTodoList([...todoList, {
        //key: value
        todoText: todoText,
        //creates random key id: for each entry
        id: Math.floor(Math.random() * 10000).toString(),
        //doesn't look like we needed markedChecked key. The checked value adds to the array when the function is run in Display.js. Is he checkbox assigned "false" automatically?
    }])
    setTodoText("");
    //reset setTodoText
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={(e)=> { 
                console.log(e) //logs every time a character is entered or deleted
                setTodoText(e.target.value) //event.input.what is entered. updates todoText
            }}

            //value attribute assigned to todoText  
                value={todoText}
                type="text" />
                <button>
                    Add to list
                </button>
            </form>
        </div>
    )
}

export default Form;