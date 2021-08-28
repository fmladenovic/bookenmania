import { RouterState, LocationChangeAction } from 'connected-react-router';

import { IApiAction, IApiState } from './api/api.types';
import { IPageAction, IPageState } from './page/page.types';
import { IResourcesAction, IResourcesState } from './resource/resource.types';

export type IAppAction = LocationChangeAction | IApiAction | IResourcesAction | IPageAction;

export interface IAppState {
  api: IApiState;
  resource: IResourcesState;
  page: IPageState;
  router: RouterState;
}
