import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchAllEventsAsyncActions } from './actions';
import { eventApi } from '../../api';
import { CEvent } from '../../models';

export function* fetchAllEvents(action: ReturnType<typeof fetchAllEventsAsyncActions.request>) {
    try {
        const events: CEvent[] = yield call(eventApi.fetchAllEvents);
        yield put(fetchAllEventsAsyncActions.success(events));
    } catch (error) {
        yield put(fetchAllEventsAsyncActions.failure(error));
    }
}

export default function* root() {
    yield takeLatest(fetchAllEventsAsyncActions.request, fetchAllEvents);
}