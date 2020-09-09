import { createAsyncAction, createAction } from "typesafe-actions";
import { IUserData } from "../../models";

export const fetchUserAction = createAction("@user/FETCH_USER")();
export const fetchUserAsyncActions = createAsyncAction(
    '@user/FETCH_USER_REQUEST',
    '@user/FETCH_USER_SUCCESS',
    '@user/FETCH_USER_ERROR',
)<undefined, IUserData, Error>();

export const signUpEventAction = createAction("@user/SIGN_UP_EVENT")<number>();
export const signUpEventAsyncActions = createAsyncAction(
    '@user/SIGN_UP_EVENT_REQUEST',
    '@user/SIGN_UP_EVENT_SUCCESS',
    '@user/SIGN_UP_EVENT_ERROR',
)<undefined, IUserData, Error>();


export const cancelEventAction = createAction("@user/CANCEL_EVENT")<number>();
export const cancelEventAsyncActions = createAsyncAction(
    '@user/CANCEL_EVENT_REQUEST',
    '@user/CANCEL_EVENT_SUCCESS',
    '@user/CANCEL_EVENT_ERROR',
)<undefined, IUserData, Error>();