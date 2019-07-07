import React from 'react';


class ToDoItem extends React.Component {
    render(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{this.props.task}</p>
        </div>
    )
}
}

export default ToDoItem