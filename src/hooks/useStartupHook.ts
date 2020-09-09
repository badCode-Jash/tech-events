import rootStore from "../store/rootStore";
import { fetchUserAction } from "../store/user/actions";
import { fetchAllCitiesAction } from "../store/event/actions";

function useStartup() {
    const store = rootStore({});
    fetchUser();

    function fetchUser() {
        store.dispatch(fetchUserAction());
        store.dispatch(fetchAllCitiesAction());
    }

    return [store];
}

export default useStartup;