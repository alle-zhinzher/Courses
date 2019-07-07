import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isTrue: true,
            gender: "",
            fawColor: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({[name]: value})

    }
    
    render() {
        const st = {
            background: "blue"
        }
        return (
            <form >
                <input type="text" name="firstName" placeholder="First name" onChange={this.handleChange}/>
                <input type="text" name="lastName" placeholder="Last name" onChange={this.handleChange} />
                <input type="checkbox" name="isTrue" checked={this.state.isTrue} onChange={this.handleChange} /> Make blue? <hr/>
                <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange} />Male <hr />
                <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange} />Female <hr />
                <select value={this.state.fawColor} onChange={this.handleChange} name="fawColor">
                    <option value="blue">1</option>
                    <option value="red">2</option>
                    <option value="green">3</option>
                </select>
                <h1>{this.state.fawColor}</h1>
                <h1 style={this.state.isTrue ? st: {}}>{this.state.firstName} {this.state.lastName}</h1>
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