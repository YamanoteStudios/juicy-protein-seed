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
    authenticationState: fromAuthentication.State;
    loginView: fromLoginView.State;
  };


  export const reducers: ActionReducerMap<State> = {
    authenticationState: fromAuthentication.reducer,
    loginView: fromLoginView.reducer,
  };

  // Create Feature Selector State ....
export const selectAuthenticationState = 
    createFeatureSelector<fromAuthentication.State>('authenticationState');

  // Create a Selector for Authenticating User...
  export const selectAuthenticatedUser =
   createSelector(selectAuthenticationState,
    fromAuthentication.selectUser,
  );

  // Select Login Page State = 
  export const selectLoginViewState = createFeatureSelector<fromLoginView.State>('loginView');
 
  // SelectIsLoggedIn User State
export const selectIsLoggedIn = createSelector(selectAuthenticatedUser, user => !!user);

export const selectLoginViewPending = createSelector(
  selectLoginViewState,
  fromLoginView.selectPending,
);
export const selectLoginViewError = createSelector(
  selectLoginViewState,
  fromLoginView.selectError,
);


// export const metaReducers: MetaReducer<State>[] = !environment.production
// ? []
// : [];

