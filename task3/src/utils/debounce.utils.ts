import { debounce } from 'lodash';
import { DependencyList, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = <TCallback extends (...args: any[]) => any>(
  callback: TCallback,
  timeout: number,
  dependecies: DependencyList,
) => useCallback(debounce(callback, timeout), dependecies);
