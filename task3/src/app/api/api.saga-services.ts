import { call, cancelled, put } from 'redux-saga/effects';

import axios, { CancelTokenSource } from 'axios';
import * as types from './api.types';
import * as actions from './api.actions';
import humps from 'lodash-humps-ts';

// SINGLETON, we don't need multiple instances of this
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
  },
});

export function* apiRequest<TParams = unknown, TPayload = unknown, TResponse = unknown>(
  requestInfo: types.IApiRequestConfig<TParams, TPayload>,
) {
  const cancelSource = (yield call([axios.CancelToken, axios.CancelToken.source])) as CancelTokenSource;
  try {
    yield put(actions.storeApiInProgress(requestInfo.apiRouteKey));
    yield put(actions.clearApiError(requestInfo.apiRouteKey));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const responseUnderscore = (yield call([api, api.request], {
      url: requestInfo.uri,
      method: requestInfo.method,
      params: requestInfo.params,
      data: requestInfo.data,
      cancelToken: cancelSource.token,
      responseType: requestInfo.responseType ? requestInfo.responseType : undefined,
      ...requestInfo.overrides,
    })) as { data: TResponse };
    const response = humps(responseUnderscore);
    yield put(actions.clearApiInProgress(requestInfo.apiRouteKey));
    return response.data as TResponse;
  } catch (e) {
    if (e.response?.data) {
      yield put(
        actions.storeApiError(requestInfo.apiRouteKey, { message: 'Something went wrong...', ...e.response.data }),
      );
      yield put(actions.clearApiInProgress(requestInfo.apiRouteKey));
      return null;
    }

    throw e;
  } finally {
    if ((yield cancelled()) as boolean) {
      // cancel api call if task is cancelled
      yield call([cancelSource, cancelSource.cancel]);
    }
  }
}
