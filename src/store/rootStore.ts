import { createStore, Middleware, Store, compose, applyMiddleware } from 'redux';
import reduxFreeze from 'redux-freeze';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import errorHandler from './middlewares/errorLogger';

function rootStore(initialState: any) {
    const middlewares: Middleware[] = [];
    const sagaMiddleware = createSagaMiddleware();
    let composeEnhancers = compose;

    //Add general middlewares
    middlewares.push(sagaMiddleware);

    if(process.env.NODE_ENV === "development") {
        //Add development middlewares
        middlewares.push(errorHandler);

        composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
    }
 
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    );
 
    const reducers = rootReducer;

    const store: Store = createStore(reducers, enhancer);

    sagaMiddleware.run(rootSaga);

    return store;
}

export default rootStore;