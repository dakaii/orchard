import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../reducers/Index'
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger'

const middlewares = [
    ReduxPromise,
    logger
]

 export const store = createStore(RootReducer, applyMiddleware(...middlewares));

