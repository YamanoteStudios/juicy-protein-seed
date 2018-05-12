import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  import * as fromAuthentication from './authentication.reducer';
  import * as fromLoginView from './login-view.reducer';


  export interface State {
    auth: fromAuthentication.State;
  };


  export const reducers: ActionReducerMap<State> = {
  auth: fromAuthentication.reducer,
  };

  // Create Feature Selector State ....
export const selectAuthenticationState = 
    createFeatureSelector<fromAuthentication.State>('auth');

  // Create a Selector for Authenticating User...
  export const selectAuthenticatedUser =
   createSelector(selectAuthenticationState,
    fromAuthentication.selectUser,
  );

  // Select Login Page State = 
  export const selectLoginViewState =
  createSelector(<fromLoginView.State>('loginPage'),
    fromAuthentication.selectUser,
  );

  // SelectIsLoggedIn User State
export const SelectIsLoggedIn = createSelector(selectAuthenticatedUser, user => !!user);

// export const metaReducers: MetaReducer<State>[] = !environment.production
// ? []
// : [];
