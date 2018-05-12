import { Action } from '@ngrx/store';
import { Credentials } from '../models/credentials.model';
import { UserModel } from '../models/user.model';

export enum CredentialsActionTypes {
  Login = '[Login Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  Logout = '[Authentication] Confirm Logout',

}

export class Login implements Action {
  readonly type = CredentialsActionTypes.Login;

  constructor(public payload: Credentials) {}
}


export class Logout implements Action {
    readonly type = CredentialsActionTypes.Logout;
  }



export type CredentialsActions =
| Login
| Logout;

  