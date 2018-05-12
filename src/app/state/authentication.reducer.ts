import { Action } from '@ngrx/store';
import { CredentialsActionTypes, CredentialsActions } from 'src/app/authentication/actions/authentication.actions';
import { UserModel } from 'src/app/authentication/models/user.model';


export interface State {
  user: UserModel | null;
}

export const initialState: State = {
  user: null,
};


export function reducer(state = initialState, action: CredentialsActions): State {
  // add in minute
  switch (action.type) {
    case CredentialsActionTypes.LoginSuccess:
      return { ...state, user: action.payload.user };

    case CredentialsActionTypes.LogoutConfirmed:
      return initialState;

    default:
      return state;
  }

}

export const selectUser = (state: State) => state.user;
