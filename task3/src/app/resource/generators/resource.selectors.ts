import { ISelector } from '../../common/common.types';
import * as types from './resource.types';

export const generateResourceSelectors = <TResource extends types.IResource>(
  subStateSelector: ISelector<types.IResourceState<TResource>>,
): types.IResourceSelectors<TResource> => ({
  selectResourceIds: (state) => subStateSelector(state).ids,
  selectResourceList: (state) => Object.values(subStateSelector(state).byId),
  selectResourceById: (state, id) => subStateSelector(state).byId[id] ?? null,
  selectResourcesById: (state, ids) => ids.map((id) => subStateSelector(state).byId[id] ?? null),
});
