import { put, call, takeEvery, select } from 'redux-saga/effects';

import { COUNTER } from '../constants/counter';
import { setCounter, setComputingStatus } from '../actions/counter'
import { decCounterOnAPI, incCounterOnAPI } from '../api/counter';

export const getCounter = state => state.counter.value;

export default function* watchCounter() {
    yield takeEvery(COUNTER.INCREMENT, handleIncrement);
    yield takeEvery(COUNTER.DECRIMENT, handleDecriment);
};

export function* handleIncrement() {
    yield put(setComputingStatus())
    const value = yield select(getCounter);
    const nextValue = yield call(incCounterOnAPI, value);
    yield put(setCounter(nextValue));
};

export function* handleDecriment() {
    yield put(setComputingStatus())
    const value = yield select(getCounter);
    const nextValue = yield call(decCounterOnAPI, value);
    yield put(setCounter(nextValue));
};
