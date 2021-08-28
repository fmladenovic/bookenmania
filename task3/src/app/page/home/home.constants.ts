import { createActionConst } from '../../../utils/action.utils';

const HOME_NAMESPACE = 'HOME';

export const SEARCH_BOOKS = createActionConst(HOME_NAMESPACE, 'SEARCH_BOOKS');
export const SCROLL_BOOKS = createActionConst(HOME_NAMESPACE, 'SCROLL_BOOKS');
export const STORE_SEARCHED_BOOKS = createActionConst(HOME_NAMESPACE, 'STORE_SEARCHED_BOOKS');
export const CLEAR_SEARCHED_BOOKS = createActionConst(HOME_NAMESPACE, 'CLEAR_SEARCHED_BOOKS');
