import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import mathReducer from './mathReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    math: mathReducer,
});

export default rootReducer;