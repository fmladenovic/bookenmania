import { generateResourceSelectors } from '../generators/resource.selectors';

import * as types from './book.types';

export const bookSelectors = {
  ...generateResourceSelectors<types.IBook>((state) => state.resource.book),
};
