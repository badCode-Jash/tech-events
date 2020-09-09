import { eventApi, cityApi } from '../../api';
import { ICityData, IEventsAndCount } from '../../models';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
    fetchAllEventsAsyncActions,
    fetchAllCitiesAsyncActions,
    fetchMyEventsAsyncActions,
    fetchAllEventsAction,
    fetchMyEventsAction,
    fetchAllCitiesAction
} from './actions';

export function* fetchAllEvents(action: ReturnType<typeof fetchAllEventsAction>) {
    try {
        yield put(fetchAllCitiesAsyncActions.request());
        const eventsAndCount: IEventsAndCount = yield call(eventApi.fetchAllEvents, action.payload.page, action.payload.filterParams);
        yield put(fetchAllEventsAsyncActions.success(eventsAndCount));
    } catch (error) {
        yield put(fetchAllEventsAsyncActions.failure(error));
    }
}

export function* fetchMyEvents(action: ReturnType<typeof fetchMyEventsAction>) {
    try {
        yield put(fetchAllCitiesAsyncActions.request());
        const eventsAndCount: IEventsAndCount = yield call(eventApi.fetchMyEvents, action.payload.page, action.payload.eventIds, action.payload.filterParams);
        yield put(fetchMyEventsAsyncActions.success(eventsAndCount));
    } catch (error) {
        yield put(fetchMyEventsAsyncActions.failure(error));
    }
}

export function* fetchAllCities(action: ReturnType<typeof fetchAllCitiesAction>) {
    try {
        yield put(fetchAllCitiesAsyncActions.request())
        const cities: ICityData[] = yield call(cityApi.fetchAllCities);
        yield put(fetchAllCitiesAsyncActions.success(cities));
    } catch (error) {
        yield put(fetchAllCitiesAsyncActions.failure(error));
    }
}

export default function* root() {
    yield takeLatest(fetchAllEventsAction, fetchAllEvents)
    yield takeLatest(fetchAllCitiesAction, fetchAllCities)
    yield takeLatest(fetchMyEventsAction, fetchMyEvents)
}