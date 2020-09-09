import { api } from "../utils";
import { urlConfig } from "../config";
import { ICityData } from "../models";

export const fetchAllCities = async () => {
    const url = urlConfig.buildUrl("cities");
    const data = await api.request(url, api.HTTPMethod.GET) as ICityData[];
    return data;
}