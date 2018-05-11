import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  import * as fromAuthentication from './authentication.reducer';


  export interface State {
    auth: fromAuthentication.State;
  };


  export const reducers: ActionReducerMap<State> = {
  auth: fromAuthentication.reducer,
  };



// export const metaReducers: MetaReducer<State>[] = !environment.production
// ? []
// : [];
