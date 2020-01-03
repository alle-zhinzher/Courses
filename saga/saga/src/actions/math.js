import { MATH } from '../constants/math';

const startComputing = value2 => ({
    type: MATH.COMPUTING,
    value2 
});

const setMul = mul => ({
    type: MATH.COMPUTED_MUL,
    mul,
});

const setDiv = div => ({
    type: MATH.COMPUTED_DIV,
    div,
});

const setSqrt = sqrt => ({
    type: MATH.COMPUTED_SQRT,
    sqrt,
});

const setError = error => ({
    type: MATH.COMPUTED_ERROR,
    error
});

export { 
    startComputing,
    setMul,
    setDiv,
    setSqrt,
    setError,
}