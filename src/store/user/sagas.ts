import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { fetchUserAsyncActions, signUpEventAsyncActions, cancelEventAsyncActions, fetchUserAction, signUpEventAction, cancelEventAction } from './actions';
import { userApi } from '../../api';
import { CUser, IUserData } from '../../models';
import { getUser } from './selectors';

export function* fetchUser(action: ReturnType<typeof fetchUserAction>) {
    try {
        yield put(fetchUserAsyncActions.request())
        const user: IUserData = yield call(userApi.fetchUser);
        yield put(fetchUserAsyncActions.success(user));
    } catch (error) {
        yield put(fetchUserAsyncActions.failure(error));
    }
}

export function* signUpEvent(action: ReturnType<typeof signUpEventAction>) {
    try {
        yield put(signUpEventAsyncActions.request())
        const user: CUser = yield select(getUser);
        user.signEvent(action.payload);
        yield call(userApi.updateUser, user);
        yield put(signUpEventAsyncActions.success(user as unknown as IUserData))
    } catch (error) {
        yield put(signUpEventAsyncActions.failure(error));
    }
}

export function* cancelEvent(action: ReturnType<typeof cancelEventAction>) {
    try {
        yield put(cancelEventAsyncActions.request())
        const user: CUser = yield select(getUser);
        user.cancelEvent(action.payload);
        yield call(userApi.updateUser, user);
        yield put(cancelEventAsyncActions.success(user as unknown as IUserData))
    } catch (error) {
        yield put(cancelEventAsyncActions.failure(error));
    }
}

export default function* root() {
    yield all([
        yield takeLatest(fetchUserAction, fetchUser),
        yield takeLatest(signUpEventAction, signUpEvent),
        yield takeLatest(cancelEventAction, cancelEvent)
    ]);
}