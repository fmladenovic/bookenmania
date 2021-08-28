import * as types from './resource.types';

export const generateStoreResourceAction = <TResource extends types.IResource>(type: string) => (
  resources: TResource | TResource[],
): types.IStoreResourceAction<TResource> => ({
  type,
  payload: resources,
});

export const generateClearResourceAction = (type: string) => (
  resourceIds: types.IResourceIdType | types.IResourceIdType[] | null,
): types.IClearResourceAction => ({
  type,
  payload: resourceIds,
});
