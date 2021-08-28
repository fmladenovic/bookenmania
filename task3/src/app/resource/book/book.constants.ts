import { createActionConst } from '../../../utils/action.utils';

const BOOK_NAMESPACE = 'BOOK';

export const STORE_BOOK = createActionConst(BOOK_NAMESPACE, 'STORE_BOOK');
export const CLEAR_BOOK = createActionConst(BOOK_NAMESPACE, 'CLEAR_BOOK');
