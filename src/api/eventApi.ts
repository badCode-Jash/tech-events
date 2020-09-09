import { cityApi } from ".";
import { api } from "../utils"
import orderBy from 'lodash/orderBy';
import { timeIs, DayPeriod } from "../utils/datetime";
import { IEventData, IEventsAndCount, IFilterData } from "../models";
import { urlConfig, PAGINATION_MINIMUM_FETCH_VALUE } from "../config"

export const fetchAllEvents = async (page: number, filterParams: IFilterData): Promise<IEventsAndCount> => {
    const url = urlConfig.buildUrl("events");
    const data = await api.request(url, api.HTTPMethod.GET) as IEventData[];
    let orderedData = orderBy(data, event => event.startDate, ["desc"]);

    const skip = (page - 1) * PAGINATION_MINIMUM_FETCH_VALUE;
    const take = PAGINATION_MINIMUM_FETCH_VALUE;
    orderedData = await filterEventsByFilterParams(orderedData, filterParams);
    return {
        events: orderedData.slice(skip, skip + take),
        count: orderedData.length
    }
}

export const fetchMyEvents = async (page: number, eventIds: number[], filterParams: IFilterData): Promise<IEventsAndCount> => {
    const url = urlConfig.buildUrl("events");
    const data = await api.request(url, api.HTTPMethod.GET) as IEventData[];
    const orderedData = orderBy(data, event => event.startDate, ["desc"]);

    const skip = (page - 1) * PAGINATION_MINIMUM_FETCH_VALUE;
    const take = PAGINATION_MINIMUM_FETCH_VALUE;

    let myEvents = orderedData.filter(event => eventIds.includes(event.id));
    myEvents = await filterEventsByFilterParams(myEvents, filterParams);
    return {
        events: myEvents.slice(skip, skip + take),
        count: myEvents.length
    }
}

async function filterEventsByFilterParams(events: IEventData[], filterParams: IFilterData) {
    let eventList = events;

    if (filterParams.city) {
        const cities = await cityApi.fetchAllCities();
        const cityIds = cities
            .filter(city => city.name
                .toLowerCase()
                .includes(filterParams.city?.toLowerCase() || ""))
            .map(city => city.id);
        eventList = eventList.filter(event => cityIds.includes(event.city));
    }

    if (filterParams.name) {
        eventList = eventList.filter(event => event.name.includes(filterParams.name || ""))
    }

    if (filterParams.free) {
        eventList = eventList.filter(event => event.isFree);
    }

    if (filterParams.morning)
        eventList = eventList.filter(event => timeIsLocal(event, "morning"))

    if (filterParams.evening)
        eventList = eventList.filter(event => timeIsLocal(event, "evening"))

    if (filterParams.afternoon)
        eventList = eventList.filter(event => timeIsLocal(event, "afternoon"))

    if (filterParams.night)
        eventList = eventList.filter(event => timeIsLocal(event, "night"))

    function timeIsLocal(event: IEventData, name: DayPeriod) {
        return timeIs(new Date(event.startDate), new Date(event.endDate), name)
    }

    return eventList;
}