import { api } from "../utils"
import { urlConfig } from "../config"
import { CEvent, IEventData } from "../models";

export const fetchAllEvents = async () => {
    const url = urlConfig.buildUrl("events");
    const data = await api.request(url, api.HTTPMethod.GET);

    return data.map((event: IEventData) => {
        return new CEvent(event);
    })
}