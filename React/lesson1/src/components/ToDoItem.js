import React from 'react';


function ToDoItem(props){
    const completed = {
        color: 'red',
        textDecoration: 'line-through',

    }
    const uncompleted = {
        color: 'white',

    }
    return (
            <div className="todo-item">
                <input 
                    type="checkbox"
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item.id)}
                    />
                <p style={props.item.completed ? completed : uncompleted}>{props.item.task}</p>
            </div>
        )
}


export default ToDoItem