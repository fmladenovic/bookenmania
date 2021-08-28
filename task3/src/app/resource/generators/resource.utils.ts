import * as types from './resource.types';

import { uniq } from 'lodash';
import { IDictionary } from '../../common/common.types';

export const ensureArray = <T>(p: T | T[]): T[] => (Array.isArray(p) ? p : [p]);

export const mergeIds = <TResource extends types.IResource>(
  prevIds: types.IResourceIdType[],
  resources: TResource | TResource[],
): types.IResourceIdType[] => uniq([...prevIds, ...ensureArray(resources).map((resource) => resource.id)]);

export const filterIds = (
  prevIds: types.IResourceIdType[],
  resourceIds: types.IResourceIdType | types.IResourceIdType[] | null,
): types.IResourceIdType[] =>
  resourceIds === null ? [] : prevIds.filter((prevId) => !!ensureArray(resourceIds).find((fId) => prevId === fId));

export const mergeById = <TResource extends types.IResource>(
  prevById: IDictionary<TResource>,
  resources: TResource | TResource[],
): IDictionary<TResource> => ({
  ...prevById,
  ...ensureArray(resources).reduce(
    (newById, resource) => ({
      ...newById,
      [resource.id]: resource,
    }),
    {},
  ),
});

export const filterById = <TResource extends types.IResource>(
  prevById: IDictionary<TResource>,
  resourceIds: types.IResourceIdType | types.IResourceIdType[] | null,
): IDictionary<TResource> => {
  if (resourceIds === null) {
    return {};
  }

  const newById = { ...prevById };

  ensureArray(resourceIds).forEach((resourceId) => {
    delete newById[resourceId];
  });

  return newById;
};
