import { useSelector } from 'react-redux';
import { select as selectEffect } from 'redux-saga/effects';
import { IAppState } from '../app/app.types';
import { ISelector, ISelectorWithParams } from '../app/common/common.types';

export const useSelect = <TReturn>(selector: ISelector<TReturn>): TReturn => useSelector(selector);

export const useSelectWithParams = <TParams, TReturn>(
  selector: ISelectorWithParams<TParams, TReturn>,
  params: TParams,
): TReturn => useSelector((state: IAppState) => selector(state, params));

export const select = <TReturn>(selector: ISelector<TReturn>) => selectEffect(selector);

export const selectWithParams = <TParams, TReturn>(selector: ISelectorWithParams<TParams, TReturn>, params: TParams) =>
  selectEffect((state: IAppState) => selector(state, params));
