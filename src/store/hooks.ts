import {
  useDispatch as useDefaultDispatch,
  useSelector as useDefaultSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import type {Dispatch, Store} from '.';

const useDispatch = (): Dispatch => useDefaultDispatch();
const useSelector: TypedUseSelectorHook<Store> = (selector, equalityFn) =>
  useDefaultSelector(selector, equalityFn);

export {useDispatch, useSelector};
