import { ISelectorWithParams } from '../common/common.types';
import * as constants from './api.constants';

import { AxiosRequestConfig } from 'axios';

type IBookApiRouteKey = 'searchBooks' | 'getBook';

export type IApiRouteKey = IBookApiRouteKey;

export interface IApiError {
  status: number;
  error: string;
  message: string;
}

// export interface IPagination {
//   page: number;
//   size: number;
// }

// export interface IStoreApiPagination {
//   type: typeof constants.STORE_API_PAGINATION;
//   payload: {
//     apiRouteKey: IApiRouteKey;
//     pagination: IPagination;
//   };
// }

// export interface IClearApiPagination {
//   type: typeof constants.CLEAR_API_PAGINATION;
//   payload: IApiRouteKey;
// }

export interface IApiRequestState {
  inProgress: boolean;
  error: IApiError | null;
}

export interface IStoreApiInProgress {
  type: typeof constants.STORE_API_IN_PROGRESS;
  payload: IApiRouteKey;
}

export interface IClearApiInProgress {
  type: typeof constants.CLEAR_API_IN_PROGRESS;
  payload: IApiRouteKey;
}

export interface IStoreApiError {
  type: typeof constants.STORE_API_ERROR;
  payload: {
    key: IApiRouteKey;
    error: IApiError;
  };
}

export interface IClearApiError {
  type: typeof constants.CLEAR_API_ERROR;
  payload: IApiRouteKey;
}

export type IApiAction = IStoreApiInProgress | IClearApiInProgress | IStoreApiError | IClearApiError;

export type IApiState = {
  [key in IApiRouteKey]: IApiRequestState;
};

export interface ISelectApiInProgress extends ISelectorWithParams<IApiRouteKey, boolean> {}
export interface ISelectApiError extends ISelectorWithParams<IApiRouteKey, IApiError | null> {}

export interface IApiSelectors {
  selectApiInProgress: ISelectApiInProgress;
  selectApiError: ISelectApiError;
}

type IResponseType = 'blob';
export type IApiMethod = 'get' | 'post' | 'put' | 'delete';

export interface IApiRequestConfig<TParams = unknown, TPayload = unknown> {
  apiRouteKey: IApiRouteKey;
  uri: string;
  method: IApiMethod;
  params?: TParams;
  data?: TPayload;
  responseType?: IResponseType;
  overrides?: Pick<AxiosRequestConfig, 'baseURL' | 'headers'>;
}
