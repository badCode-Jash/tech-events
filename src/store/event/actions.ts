import { createAsyncAction } from 'typesafe-actions';
import { CEvent } from '../../models';

export const fetchAllEventsAsyncActions = createAsyncAction(
    '@event/FETCH_ALL_EVENTS_REQUEST',
    '@event/FETCH_ALL_EVENTS_SUCCESS',
    '@event/FETCH_ALL_EVENTS_ERROR',
)<undefined, CEvent[], Error>();