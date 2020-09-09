import { RootState } from "typesafe-actions";
import { createSelector } from 'reselect';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import { formatEventDate } from "../../utils/datetime";
import { CCity, CEvent, IEventData } from "../../models";
import { getUser } from "../user/selectors";

const getAllCities = (state: RootState) => state.event.cities && map(state.event.cities, cityData => new CCity(cityData));

const getAllEvents = (state: RootState) => state.event.events && map(state.event.events, eventData => new CEvent(eventData));

const getMyEvents = createSelector(
    getAllEvents,
    getUser,
    (events, user) => events.filter(event => user?.$signedEventIds.includes(event.$id))
);

const getEventsOrCitiesLoading = (state: RootState) => state.event.eventsOrCitiesLoading;

const getAllGroupedEvents = createSelector(
    getAllEvents,
    groupEvents,
)

const getMyGroupedEvents = createSelector(
    getMyEvents,
    groupEvents,
)

function groupEvents(events: CEvent[]) {
    var groupedEvents = groupBy(events, event => event.$startDate);
    var mapped = map(groupedEvents, (values, key) => ({
        startDate: new Date(key),
        events: values
    }))
    return mapped;
}

const getAllEventsCount = (state: RootState) => state.event.eventCount;

const getCityId = (state: RootState, cityId: number) => cityId;

const getCityNameById = createSelector(
    getAllCities,
    getCityId,
    (cities, cityId) => cities.find(city => city.$id === cityId)?.$name
)

export {
    getAllEvents,
    getMyEvents,
    getAllGroupedEvents,
    getMyGroupedEvents,
    getCityNameById,
    getAllEventsCount,
    getEventsOrCitiesLoading,
    getAllCities
}