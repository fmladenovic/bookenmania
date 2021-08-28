import { IBookAction, IBookState } from './book/book.types';

export type IResourcesAction = IBookAction;

export interface IResourcesState {
  book: IBookState;
}
