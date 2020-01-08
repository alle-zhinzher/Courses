import { all } from 'redux-saga/effects';
import counterSaga from './counterSaga';
import mathSaga from './mathSaga';
import colorSaga from './colorSaga';
import counterSaga2 from './counter2Saga';

export default function* rootSaga() {
    yield all([
        counterSaga(),
        mathSaga(),
        colorSaga(),
        counterSaga2(),
    ]);
}