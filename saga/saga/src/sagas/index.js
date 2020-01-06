import { all } from 'redux-saga/effects';
import counterSaga from './counterSaga';
import mathSaga from './mathSaga';
import colorSaga from './colorSaga';


export default function* rootSaga() {
    yield all([
        counterSaga(),
        mathSaga(),
        colorSaga(),
    ]);
}