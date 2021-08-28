import { IAppState } from '../app.types';

export interface IDictionary<T> {
  [key: string]: T;
}

export type ISelector<TReturn> = (state: IAppState) => TReturn;
export type ISelectorWithParams<TParams, TReturn> = (state: IAppState, params: TParams) => TReturn;
