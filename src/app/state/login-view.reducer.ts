import { Action } from '@ngrx/store';
import { CredentialsActionTypes, CredentialsActions } from 'src/app/authentication/actions/authentication.actions';


export interface State {
    pending: boolean;
    error: string | null;
}

export const initialState: State = {
    pending: false,
    error: null
};

//TODO: Create the  Login View Reducer
export function reducer(state = initialState, action: CredentialsActions): State {
    switch (action.type) {
        case CredentialsActionTypes.Login: {
            return { ...state, pending: true };
        }

        case CredentialsActionTypes.LoginSuccess: {
            return initialState;
        }

        case CredentialsActionTypes.LoginFailure: {
            return { ...state, error: action.payload, pending: false };
        }
        default: {
            return state;
          }
    }
}


export const selectPending = (state: State) => state.pending;
export const selectError = (state: State) => state.error;