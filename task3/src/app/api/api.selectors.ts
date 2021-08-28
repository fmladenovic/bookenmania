import * as types from './api.types';

export const apiSelectors: types.IApiSelectors = {
  selectApiInProgress: (state, key) => state.api[key].inProgress,
  selectApiError: (state, key) => state.api[key].error,
};
