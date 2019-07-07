import React from 'react';
import Greeting from './Greeting';
import Header from './Header';


class App extends React.Component {
    constructor () {
        super() 
        this.state = {
            answer: "Yess",
            name: "Alexsandr",
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.answer}</h1>
                <Header name={this.state.name} />
                <Greeting />                
            </div>
        )
    }
}

export default App