import { combineReducers, Reducer } from 'redux';
import * as types from './resource.types';
import { filterById, filterIds, mergeById, mergeIds } from './resource.utils';

const generateResourceIdsReducer = <TResource extends types.IResource>(constants: {
  STORE: string;
  CLEAR: string;
}): Reducer<types.IResourceState<TResource>['ids'], types.IResourceAction<TResource>> => (state = [], action) => {
  if (action.type === constants.STORE) {
    return mergeIds<TResource>(state, (action as types.IStoreResourceAction<TResource>).payload);
  } else if (action.type === constants.CLEAR) {
    return filterIds(state, (action as types.IClearResourceAction).payload);
  }

  return state;
};

const generateResourceByIdReducer = <TResource extends types.IResource>(constants: {
  STORE: string;
  CLEAR: string;
}): Reducer<types.IResourceState<TResource>['byId'], types.IResourceAction<TResource>> => (state = {}, action) => {
  if (action.type === constants.STORE) {
    return mergeById<TResource>(state, (action as types.IStoreResourceAction<TResource>).payload);
  } else if (action.type === constants.CLEAR) {
    return filterById<TResource>(state, (action as types.IClearResourceAction).payload);
  }

  return state;
};

export const generateResourceReducer = <TResource extends types.IResource>(constants: {
  STORE: string;
  CLEAR: string;
}): types.IResourceReducer<TResource> =>
  combineReducers({
    ids: generateResourceIdsReducer<TResource>(constants),
    byId: generateResourceByIdReducer<TResource>(constants),
  });
