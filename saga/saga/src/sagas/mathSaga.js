import { put, call, take, select, fork } from 'redux-saga/effects';

import { MATH } from '../constants/math';
import { startComputing, setError, setMul, setDiv, setSqrt } from '../actions/math'
import { calcMulAPI, calcDivAPI, clacSqrtAPI } from '../api/math';

export const getCounter = state => state.counter.value;

export default function* watchMath() {
    while(true) {
        const { value2 } = yield take(MATH.COMPUTING);
        yield call(handleComputing, value2);
    }
};

export function* handleComputing(value2) {
    const value1 = yield select(getCounter);
    yield put(startComputing());
    yield fork(fetchResource, calcMulAPI, setMul, value1, value2);
    yield fork(fetchResource, calcDivAPI, setDiv, value1, value2);
    yield fork(fetchResource, clacSqrtAPI, setSqrt, value1, value2);
};

function* fetchResource(resource, setData, value1, value2) {
    try {
        const value = yield call(resource, value1, value2)
        yield put(setData(value));
    } catch (error) {
        console.log("ERROR", error)
        yield put(setError(error));
    };
};
