import { all } from 'redux-saga/effects';
import counterSaga from './counterSaga';
import mathSaga from './mathSaga';


export default function* rootSaga() {
    yield all([
        counterSaga(),
        mathSaga(),
    ]);
}