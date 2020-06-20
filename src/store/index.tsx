import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {routesReducer} from './routes';

const rootReducer = combineReducers({
  routes: routesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

type Store = typeof store;
type Dispatch = typeof store.dispatch;

const StoreProvider = ({children}) => (
  <Provider store={store}>{children}</Provider>
);

export {StoreProvider};
export {useDispatch, useSelector} from './hooks';
export {addRoutes, setRoute, removeRoute} from './routes';
export default store;

export type {Store, Dispatch};
export type {RouteMap} from './routes';
