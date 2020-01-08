import { put, call, takeEvery, select } from 'redux-saga/effects';
import { COUNTER2 } from '../constants/counter2';
import { setCounter } from '../actions/counter2';

const getValue = state => state.counter2.value;
const incrementAPI = value => ++value;
const decrimentAPI = value => --value;


export default function* watchCounter2Saga() {
    yield takeEvery(COUNTER2.INCREMENT, handleIncrement)
    yield takeEvery(COUNTER2.DECRIMENT, handleDecriment)
}  

function* handleIncrement() {
    const currentValue = yield select(getValue);
    const nextValue = yield call(incrementAPI, currentValue);
    yield put(setCounter(nextValue));
}

function* handleDecriment() { 
    const currentValue = yield select(getValue);
    const nextValue = yield call(decrimentAPI, currentValue);
    yield put(setCounter(nextValue));
}