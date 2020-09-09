import { fetchUserAsyncActions, cancelEventAsyncActions, signUpEventAsyncActions } from "./actions"
import { createReducer } from "typesafe-actions"
import { IUserData } from "../../models"

export interface UserState {
    user: IUserData | null,
    userUpdating: boolean
}

const initialState: UserState = {
    user: null,
    userUpdating: false
}

export default createReducer(initialState as UserState)
    .handleAction(fetchUserAsyncActions.request, (state, action) => ({
        ...state
    }))
    .handleAction(fetchUserAsyncActions.success, (state, action) => ({
        ...state,
        user: { ...action.payload }
    }))
    .handleAction(fetchUserAsyncActions.failure, (state, action) => ({
        ...state
    }))
    .handleAction(cancelEventAsyncActions.request, (state, action) => ({
        ...state,
        userUpdating: true
    }))
    .handleAction(cancelEventAsyncActions.success, (state, action) =>({
        ...state,
        user: { ...action.payload },
        userUpdating: false
    }))
    .handleAction(cancelEventAsyncActions.failure, (state, action) => ({
        ...state
    }))
    
    .handleAction(signUpEventAsyncActions.request, (state, action) => ({
        ...state,
        userUpdating: true
    }))
    .handleAction(signUpEventAsyncActions.success, (state, action) =>({
        ...state,
        user: { ...action.payload },
        userUpdating: false
    }))
    .handleAction(signUpEventAsyncActions.failure, (state, action) => ({
        ...state
    }))