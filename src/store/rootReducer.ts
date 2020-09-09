import EventReducers from './event/reducers';
import UserReducers from './user/reducers';
import { combineReducers } from 'redux'

const reducers = combineReducers({
    event: EventReducers,
    user: UserReducers
})

export default reducers;