import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from '../reducers/Index'
import ReduxPromise from 'redux-promise';

 export const store = createStore(RootReducer,compose(applyMiddleware(ReduxPromise)));


// import { createStore, applyMiddleware } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import RootReducer from '../reducers/Index'
// // defaults to localStorage for web and AsyncStorage for react-native
// import storage from 'redux-persist/lib/storage'
// import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, RootReducer);

//  export const store = createStore(persistedReducer, applyMiddleware(thunk));
//  export const persistor = persistStore(store);