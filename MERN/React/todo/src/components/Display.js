import React, {useState} from 'react';

const Display = (props) => {

       //getter  setter
const {todoList, setTodoList} = props;

//function for delete button
//the below (id) instead of (idFromBelow) works too. so why use the extra variable?
const deleteButton = (id) => {
    //filters todoList, which is populated by getTodoList
    //returns new array of every todo whose id does NOT match the id from below, leaving only the element with the id assigned to the function
    //filters out all id tags except the id from below. If you declare "== idFromBelow" then every OTHER element is deleted because the filter sets the value ONLY the id assigned to the function
    setTodoList(todoList.filter((todo, index) => todo.id !== id))
}

const styled = (markedChecked) => {
    //conditional
    if(markedChecked === true) {
        //assigns styling to todoText
        return "strikethrough"
    }
    else {
        //this works without writing second class
        return ""
    }
}

const styled2 = (markedChecked) => {
    //conditional
    if(markedChecked === true) {
        //assigns styling to todoText
        return "colorButton"
    }
    else {
        //this works without writing second class
        return ""
    }
}

    function handleChecked(todo) {
        //parses whether todo is markedChecked
        todo.markChecked = !todo.markChecked;
        //maintains state of todoList if it's not checked, if it is checked passes markedChecked into array
        setTodoList([...todoList]);
    }




return(
    <div>
        {
       todoList.map((todo, index) => (
           <div key={index}>
               {/* class as a funtion "styled", changes CSS tag based on boolean */}
               <p className={styled(todo.markChecked)}>{todo.todoText}</p>
               {/* boolean function whether the box is checked T/F, assigned to todo */}
               <input onClick={() => handleChecked(todo) }
                   type="checkbox" />
                   {/*when clicked passes the .id for todo to const above*/}
               <button className={styled2(todo.markChecked)} onClick={()=> deleteButton(todo.id) }>
                   Delete</button>
                   </div>
            )
        ) 
    }
    </div>
)
}

export default Display;