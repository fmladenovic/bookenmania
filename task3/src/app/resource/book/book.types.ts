import { IResource, IResourceAction, IResourceSelectors, IResourceState } from '../generators/resource.types';

export interface IBook extends IResource {
  key: string;
  title: string;
  text: string;
  authorName: string[];
  coverI: string;
  cover: string;
}

export interface IBookSearchParams {
  [key: string]: string;
}

export type IBookAction = IResourceAction<IBook>;
export type IBookState = IResourceState<IBook>;
export type IBookSelectors = IResourceSelectors<IBook>;
