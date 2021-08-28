import { IAppAction } from '../app/app.types';

export const createActionConst = (namespace: string, type: string) => `[${namespace}] ${type}`;

export const isActionOfType = <TActionType extends IAppAction>(
  action: IAppAction,
  type: string,
): action is TActionType => action.type === type;
