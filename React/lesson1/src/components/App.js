import React from 'react';
import Greeting from './Greeting';
import Header from './Header';


class App extends React.Component {
    constructor () {
        super()
        this.state = {
            answer: "Yess"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.answer}</h1>
                <Header name="Alex" />
                <Greeting />                
            </div>
        )
    }
}

export default App