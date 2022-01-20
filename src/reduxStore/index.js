import { combineReducers,createStore,applyMiddleware } from "redux";
import { persistStore,persistReducer } from "redux-persist";
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'; //default localStorage
import authenticationReducer from "./authentication";

const rootReducer=combineReducers({
    authentication:authenticationReducer
});

const persistConfig={
    key:'root',
    storage,
    whitelist:['authentication']
}

const persistedReducer=persistReducer(persistConfig,rootReducer);

const store=createStore(persistedReducer,applyMiddleware(logger));

export const persistor=persistStore(store);

export default store;