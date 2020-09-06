import { api } from "../utils";
import { urlConfig } from "../config";

export const fetchAllCities = async () => {
    const url = urlConfig.buildUrl("cities");
    return await api.request(url, api.HTTPMethod.GET);
}