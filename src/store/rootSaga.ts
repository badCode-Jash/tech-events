import { all, fork } from 'redux-saga/effects';
import eventSagas from './event/sagas';
import userSagas from './user/sagas';

export default function* rootSaga() {
    return yield all([
        fork(eventSagas),
        fork(userSagas)        
    ]);
}