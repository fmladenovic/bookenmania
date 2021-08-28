import { createActionConst } from '../../utils/action.utils';

const API_NAMESPACE = 'API';

export const STORE_API_IN_PROGRESS = createActionConst(API_NAMESPACE, 'STORE_API_IN_PROGRESS');
export const CLEAR_API_IN_PROGRESS = createActionConst(API_NAMESPACE, 'CLEAR_API_IN_PROGRESS');

export const STORE_API_ERROR = createActionConst(API_NAMESPACE, 'STORE_API_ERROR');
export const CLEAR_API_ERROR = createActionConst(API_NAMESPACE, 'CLEAR_API_ERROR');
