import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Counter from './Counter/Counter';


import configureStore from '../store';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
};

export default App;