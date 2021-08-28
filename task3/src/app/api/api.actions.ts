import * as types from './api.types';
import * as constants from './api.constants';

export const storeApiInProgress = (key: types.IApiRouteKey): types.IStoreApiInProgress => ({
  type: constants.STORE_API_IN_PROGRESS,
  payload: key,
});
export const clearApiInProgress = (key: types.IApiRouteKey): types.IClearApiInProgress => ({
  type: constants.CLEAR_API_IN_PROGRESS,
  payload: key,
});

export const storeApiError = (key: types.IApiRouteKey, error: types.IApiError): types.IStoreApiError => ({
  type: constants.STORE_API_ERROR,
  payload: {
    key,
    error,
  },
});
export const clearApiError = (key: types.IApiRouteKey): types.IClearApiError => ({
  type: constants.CLEAR_API_ERROR,
  payload: key,
});
