import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import counter2Reducer from './counter2Reducer';
import mathReducer from './mathReducer';
import colorReducer from './colorReducer'


const rootReducer = combineReducers({
    counter2: counter2Reducer,
    counter: counterReducer,
    math: mathReducer,
    color: colorReducer,
});

export default rootReducer;