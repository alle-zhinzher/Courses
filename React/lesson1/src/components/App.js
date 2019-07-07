import React from 'react';
import Conditional from './Conditional';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            
            login: false,
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState(
                {loading:false}
                )}, 2000)
    }
    render() {
        return (
            <div className="todo-list">
                <Conditional loading={this.state.loading} />
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
    constructor() {
        super()
        this.state = {
            todos: todo,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (id) {
        this.setState(prevState => {
            const updateTodos = prevState.todos.map(todo => {
                if(todo.id === id) {
                     todo.completed = !todo.completed
                    }
                return todo
            })
            return {updateTodos}
        })
    }
    render() {
        const todoData = this.state.todos.map(item => <ToDoItem
                                                            key={(item.id)}
                                                            item={item}
                                                            handleChange = {this.handleChange}
                                                            />)
        return (
            <div className="todo-list">
                {todoData}
            </div>
        )
    }
}


export default App


*/