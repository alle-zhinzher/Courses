import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import mathReducer from './mathReducer';
import colorReducer from './colorReducer'


const rootReducer = combineReducers({
    counter: counterReducer,
    math: mathReducer,
    color: colorReducer,
});

export default rootReducer;