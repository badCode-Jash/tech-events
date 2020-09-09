import { api } from "../utils";
import { urlConfig } from "../config";
import { CUser, IUserData } from "../models";

export const fetchUser = async () => {
    const url = urlConfig.buildUrl("users/1");
    const data = await api.request(url, api.HTTPMethod.GET) as IUserData;
    return data;
}

export const updateUser = async (user: CUser) => {
    const url = urlConfig.buildUrl("users/1");
    await api.request(url, api.HTTPMethod.PUT, user);
}