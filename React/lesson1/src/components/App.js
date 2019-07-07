import React from 'react';

class App extends React.Component {
    constructor () {
        super() 
        this.state = {
            count: 0,
            text: 0,
            show: ""
        };
        this.overHendler = this.overHendler.bind(this);
    }
    howerHendler = () => {
        this.setState({
            count: this.state.count + 1,
            show: this.state.count,
        });
    }
    overHendler () {
        this.setState({
            text: "Over on the button",
            show: this.state.text,
        });
    }
    mouseOutHendler = () => {
        this.setState({
            show: this.state.count,
        });
    }
    render() {
        return (
            <div>
                 <p>{this.state.show}</p>
                <button onClick={this.howerHendler}
                        onMouseOver={this.overHendler}
                    onMouseOut={this.mouseOutHendler}
                >Mouse</button>

            </div>
        )
    }
}

export default App









/* 

import React from 'react';
import todo from './toDoData';
import ToDoItem from './ToDoItem';

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            todos: todo,
        }
    }

    render() {
        const todoData = this.state.todos.map(item => <ToDoItem key={(item.id)} task={item.task} />)
        return (
            <div class="todo-list">
                {todoData}
            </div>
        )
    }
}


*/