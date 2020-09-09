import { Middleware } from "redux";

const errorHandler: Middleware = api => next => action => {
    // Do stuff
    if (action?.payload && action.payload instanceof Error) {
        console.log(action.payload)
    }

    return next(action);
};

export default errorHandler;