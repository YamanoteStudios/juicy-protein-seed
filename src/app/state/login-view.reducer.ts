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
    }
}