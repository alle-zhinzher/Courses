// React imports
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
//Redux import
import { Provider } from 'react-redux';
import store from '../store';
//User components
import Header from './layout/Header';
import Dashboard from './leads/Dashdoard';





class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));