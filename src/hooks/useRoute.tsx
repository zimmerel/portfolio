import {
  createContext,
  useContext,
  ReactElement,
  useState,
  useEffect,
} from 'react';
import {Map} from 'immutable';
import {useRouter} from 'next/router';
import {RouteMap, Dispatch, removeRoute} from '../store';
import {useDispatch, useSelector, addRoutes} from '../store';
import {Route} from '../types/route';

function newKey() {
  return new Date().getTime().toString();
}

export default function useRoute() {
  const {pathname} = useRouter();

  // useEffect(() => {
  //   dispatch(addRoutes({[key]: route}));
  //   return () => dispatch(removeRoute({key}));
  // }, []);

  return {
    pathname,
    levels: pathname.split('/'),
  };
}
