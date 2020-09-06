import { RootState } from "typesafe-actions";
import { createSelector } from 'reselect';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import { formatEventDate } from "../../utils/datetime";

const getAllEvents = (state: RootState) => state.event.events;
const getAllGroupedEvents = createSelector(
    getAllEvents,
    events => orderBy(map(groupBy(events, event => event.startDate), (values, key) => ({
        startDate: key,
        events: values
    })), eventGroup => new Date(eventGroup.startDate), ["desc"])
)


export {
    getAllEvents,
    getAllGroupedEvents
}