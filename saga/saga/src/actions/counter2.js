import { COUNTER2 } from '../constants/counter2';

const incCounter = () => ({ type: COUNTER2.INCREMENT });

const decCounter = () => ({ type: COUNTER2.DECRIMENT });

const setCounter = value => ({
    type: COUNTER2.SET_COUNTER,
    value,
})

export {
    incCounter,
    decCounter,
    setCounter,
}