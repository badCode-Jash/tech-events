import rootStore from "../store/rootStore";

function useStartup() {
    const store = rootStore({});
    return [store];
}

export default useStartup;