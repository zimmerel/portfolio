import {createSlice, PayloadAction, Reducer} from '@reduxjs/toolkit';
import {RouteMap} from './types';
import {Route} from '../../types/route';

type AddRoutesPayload = PayloadAction<RouteMap>;
type SetRoutePayload = PayloadAction<{key: string; route: Route}>;
type RemoveRoutePayload = PayloadAction<{key: string}>;

function defaultRoute(route?: Route): Route {
  return {
    pathname: '',
    name: '',
    resolvedPath: '',
    icon: undefined,
    ...route,
  };
}

const routesSlice = createSlice({
  name: 'routes',
  initialState: {} as RouteMap,
  reducers: {
    addRoutes(state, action: AddRoutesPayload) {
      return {...state, ...action.payload};
    },
    setRoute(state, action: SetRoutePayload) {
      const {key, route} = action.payload;
      return {...state, [key]: defaultRoute(route)};
    },
    removeRoute(state, action: RemoveRoutePayload) {
      const {[action.payload.key]: removed, ...rest} = state;
      return rest;
    },
  },
});

export const {addRoutes, setRoute, removeRoute} = routesSlice.actions;
export default routesSlice.reducer;
