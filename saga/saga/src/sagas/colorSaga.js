import { put, call, takeEvery, select } from 'redux-saga/effects';

import { COLOR } from '../constants/color';
import { setColor } from '../actions/color'
import { changeColorAPI } from '../api/color';

export const getCounter = state => state.counter.value;

export default function* watchCounter() {
    yield takeEvery(COLOR.CHANGE_COLOR, handleColorChamge);
};

export function* handleColorChamge() {
    const nextValue = yield call(changeColorAPI);
    yield put( setColor(nextValue));
};

