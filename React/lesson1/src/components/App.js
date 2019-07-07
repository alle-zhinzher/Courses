import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form >
                <input type="text" name="firstName" placeholder="First name" onChange={this.handleChange}/>
                <input type="text" name="lastName" placeholder="Last name" onChange={this.handleChange} />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
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




componentDidMount(){
        this.setState({ loading: true })
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    data: data,
                })
            })
    }
*/