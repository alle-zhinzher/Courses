import { COLOR } from '../constants/color';

const initialState = {
    color: 'red',
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COLOR.SET_COLOR:
            return ({
                ...state,
                color: action.color,
            });
        default:
            return state;
    };
};

export default counterReducer;