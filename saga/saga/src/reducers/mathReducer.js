import { MATH } from '../constants/math';

const defaultValue = "Computing"
const initialState = {
    mul: defaultValue,
    div: defaultValue,
    sqrt: defaultValue,
    error: null,
    isComputing: false,
}

const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case MATH.COMPUTING:
            return ({
                ...state,
                isComputing: true,
            });
        case MATH.COMPUTED_MUL:
            return ({
                ...state,
                mul: action.mul,
            });
        case MATH.COMPUTED_DIV:
            return ({
                ...state,
                div: action.div,
            });
        case MATH.COMPUTED_SQRT:
            return ({
                ...state,
                sqrt: action.sqrt,
            });
        case MATH.COMPUTED_ERROR:
            return ({
                ...state,
                error: action.error,
            });
        
        default:
            return state;
    };
};

export default mathReducer;