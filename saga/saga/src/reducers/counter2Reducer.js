import { COUNTER2 } from '../constants/counter2';

const initialState = {
    value: 0,
};

const counter2Reducer = (state=initialState, action) => {
    switch(action.type){
        case(COUNTER2.SET_COUNTER):
            return ({
                ...state,
                value: action.value
            });
        default: return state;
    };
};

export default counter2Reducer