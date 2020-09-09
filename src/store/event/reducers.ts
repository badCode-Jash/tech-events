import { fetchAllEventsAsyncActions, fetchAllCitiesAsyncActions, fetchMyEventsAsyncActions } from "./actions"
import { createReducer } from "typesafe-actions"
import { CEvent, CCity, IEventData, ICityData } from "../../models"

export interface EventState {
    events: IEventData[],
    eventsOrCitiesLoading: boolean,
    eventCount: number,
    cities: ICityData[]
}

const initialState: EventState = {
    events: [],
    eventsOrCitiesLoading: false,
    eventCount: 0,
    cities: []
}

export default createReducer(initialState as EventState)
    .handleAction(fetchAllEventsAsyncActions.request, (state, action) => ({
        ...state,
        eventsOrCitiesLoading: true,
    }))
    .handleAction(fetchAllEventsAsyncActions.success, (state, action) => ({
        ...state,
        eventsOrCitiesLoading: false,
        events: { ...action.payload.events },
        eventCount: action.payload.count
    }))
    .handleAction(fetchAllEventsAsyncActions.failure, (state, action) => ({
        ...state
    }))
    .handleAction(fetchMyEventsAsyncActions.request, (state, action) => ({
        ...state,
        eventsOrCitiesLoading: true,
    }))
    .handleAction(fetchMyEventsAsyncActions.success, (state, action) => ({
        ...state,
        eventsOrCitiesLoading: false,
        events: { ...action.payload.events },
        eventCount: action.payload.count
    }))
    .handleAction(fetchMyEventsAsyncActions.failure, (state, action) => ({
        ...state
    }))
    .handleAction(fetchAllCitiesAsyncActions.request, (state, action) => ({
        ...state,
        eventsOrCitiesLoading: true,
    }))
    .handleAction(fetchAllCitiesAsyncActions.success, (state, action) => ({
        ...state,
        eventsOrCitiesLoading: false,
        cities: {...action.payload}
    }))
    .handleAction(fetchAllCitiesAsyncActions.failure, (state, action) => ({
        ...state
    }))