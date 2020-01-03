import { COUNTER } from '../constants/counter';

const initialState = {
    value: 0,
    isComputing: false,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER.COMPUTING:
            return ({
                ...state,
                isComputing: true,
            });
        case COUNTER.COMPUTED_SUCCESS:
            return ({
                ...state,
                isComputing: false,
                value: action.value,
            });
        default:
            return state;
    };
};

export default counterReducer;