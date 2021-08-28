import { Reducer } from 'redux';

import * as types from './api.types';
import * as constants from './api.constants';

const initialRequestState: types.IApiRequestState = {
  inProgress: false,
  error: null,
};

const initialBookRequestState = {
  searchBooks: initialRequestState,
  getBook: initialRequestState,
};

const initialState: types.IApiState = {
  ...initialBookRequestState,
};

// exception to the rule, because of dynamic keys on state, it was easier to bundle everything into one reducer
// in general don't do this, create reducers per property
export const apiReducer: Reducer<types.IApiState, types.IApiAction> = (state = initialState, action) => {
  if (action.type === constants.STORE_API_IN_PROGRESS) {
    const key = (action as types.IStoreApiInProgress).payload;

    return {
      ...state,
      [key]: {
        ...state[key],
        inProgress: true,
      },
    };
  } else if (action.type === constants.CLEAR_API_IN_PROGRESS) {
    const key = (action as types.IClearApiInProgress).payload;

    return {
      ...state,
      [key]: {
        ...state[key],
        inProgress: false,
      },
    };
  } else if (action.type === constants.STORE_API_ERROR) {
    const { key, error } = (action as types.IStoreApiError).payload;

    return {
      ...state,
      [key]: {
        ...state[key],
        error,
      },
    };
  } else if (action.type === constants.CLEAR_API_ERROR) {
    const key = (action as types.IClearApiError).payload;

    return {
      ...state,
      [key]: {
        ...state[key],
        error: null,
      },
    };
  }

  return state;
};
