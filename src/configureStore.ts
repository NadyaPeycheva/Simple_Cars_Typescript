import { legacy_createStore as createStore,applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./reducers/rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware=createSagaMiddleware();

const persistConfig={
    key:'root',storage
}
const persistedReducer=persistReducer(persistConfig,rootReducer)

const store=createStore(persistedReducer,applyMiddleware(sagaMiddleware));
export const persistor=persistStore(store);
sagaMiddleware.run(rootSaga);

export type RootStateType=ReturnType<typeof rootReducer>;
export default store;
