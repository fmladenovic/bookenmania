import * as types from './home.types';

export const homePageSelectors: types.IHomePageSelectors = {
  selectSearchedBooks: (state) => state.page.home.searchedBooks,
};
