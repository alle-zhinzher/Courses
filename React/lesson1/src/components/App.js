import React from 'react';
import FormConteiner from './FormConteiner'

function App(){
    return (
        <FormConteiner />
    )   
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