import { Reducer } from 'redux';
import { IDictionary, ISelector, ISelectorWithParams } from '../../common/common.types';

export type IResourceIdType = string;

export interface IResource {
  id: IResourceIdType;
}

export interface IStoreResourceAction<TResource extends IResource> {
  type: string;
  payload: TResource | TResource[];
}

export interface IClearResourceAction {
  type: string;
  payload: IResourceIdType | IResourceIdType[] | null;
}

export type IResourceAction<TResource extends IResource> = IStoreResourceAction<TResource> | IClearResourceAction;

export interface IResourceState<TResource extends IResource> {
  ids: IResourceIdType[];
  byId: IDictionary<TResource>;
}

export interface IResourceReducer<TResource extends IResource>
  extends Reducer<IResourceState<TResource>, IResourceAction<TResource>> {}

export interface IResourceSelectors<TResource extends IResource> {
  selectResourceIds: ISelector<IResourceIdType[]>;
  selectResourceList: ISelector<TResource[]>;
  selectResourceById: ISelectorWithParams<IResourceIdType, TResource | null>;
  selectResourcesById: ISelectorWithParams<IResourceIdType[], (TResource | null)[]>;
}
