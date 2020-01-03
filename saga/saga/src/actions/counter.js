import { COUNTER } from '../constants/counter';

const decCounter = () => ({
    type: COUNTER.DECRIMENT,
});

const incCounter = () => ({
    type: COUNTER.INCREMENT,
});

const setComputingStatus = value => ({
    type: COUNTER.COMPUTING,
});

const setCounter = value => ({
    type: COUNTER.COMPUTED_SUCCESS,
    value
});

export { 
    decCounter,
    incCounter,
    setComputingStatus,
    setCounter,
}