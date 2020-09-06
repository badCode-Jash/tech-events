import { fetchAllEventsAsyncActions } from "./actions"
import { createReducer } from "typesafe-actions"
import { CEvent } from "../../models"

export interface EventState {
    events: CEvent[]
}

const initialState: EventState = {
    events: []
}

export default createReducer(initialState as EventState)
    .handleAction(fetchAllEventsAsyncActions.request, (state, action) => ({
        ...state
    }))
    .handleAction(fetchAllEventsAsyncActions.success, (state, action) => ({
        ...state,
        events: action.payload
    }))
    .handleAction(fetchAllEventsAsyncActions.failure, (state, action) => ({
        ...state
    }))