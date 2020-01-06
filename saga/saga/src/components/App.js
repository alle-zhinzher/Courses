import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Counter from './Counter/Counter';
import Flex from './Flex/Flex';
import DivColor from './DivColor/DivColor'

import configureStore from '../store';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <DivColor />
      </div>
    </Provider>
  );
};

export default App;