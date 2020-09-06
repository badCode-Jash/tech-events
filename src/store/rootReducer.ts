import EventReducers from './event/reducers';
import { combineReducers } from 'redux'

const reducers = combineReducers({
    event: EventReducers
})

export default reducers;