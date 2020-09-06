import { all } from 'redux-saga/effects';
import eventSagas from './event/sagas';

export default function* rootSaga() {
    return yield all([
        eventSagas()
    ]);
}