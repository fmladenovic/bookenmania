import { IHomePageAction, IHomePageState } from './home/home.types';

export type IPageAction = IHomePageAction | IHomePageAction;

export interface IPageState {
  home: IHomePageState;
}
