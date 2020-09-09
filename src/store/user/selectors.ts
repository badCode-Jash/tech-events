import { RootState } from "typesafe-actions";
import { CUser } from "../../models";

const getUser = (state: RootState) => state.user.user && new CUser(state.user.user);
const getUserUpdating = (state: RootState) => state.user.userUpdating;

export {
    getUser,
    getUserUpdating
}