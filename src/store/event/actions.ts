import { createAsyncAction, createAction } from 'typesafe-actions';
import { ICityData, IEventsAndCount, IFilterData } from '../../models';


export const fetchAllEventsAction = createAction("@event/FETCH_ALL_EVENTS")<{ page: number, filterParams: IFilterData }>();
export const fetchAllEventsAsyncActions = createAsyncAction(
    '@event/FETCH_ALL_EVENTS_REQUEST',
    '@event/FETCH_ALL_EVENTS_SUCCESS',
    '@event/FETCH_ALL_EVENTS_ERROR',
)<undefined, IEventsAndCount, Error>();

export const fetchMyEventsAction = createAction("@event/FETCH_MY_EVENTS")<{ page: number, eventIds: number[], filterParams: IFilterData }>();
export const fetchMyEventsAsyncActions = createAsyncAction(
    '@event/FETCH_MY_EVENTS_REQUEST',
    '@event/FETCH_MY_EVENTS_SUCCESS',
    '@event/FETCH_MY_EVENTS_ERROR',
)<undefined, IEventsAndCount, Error>();

export const fetchAllCitiesAction = createAction("@event/FETCH_ALL_CITIES")();
export const fetchAllCitiesAsyncActions = createAsyncAction(
    '@event/FETCH_ALL_CITIES_REQUEST',
    '@event/FETCH_ALL_CITIES_SUCCESS',
    '@event/FETCH_ALL_CITIES_ERROR',
)<undefined, ICityData[], Error>();