import { Action } from '@ngrx/store';
import { Credentials } from '../models/credentials.model';
import { UserModel } from '../models/user.model';

export enum CredentialsActionTypes {
  Login = '[Login Page] Login',
  LoginSuccess = '[Authentication API] Login Success',
  Logout = '[Authentication] Confirm Logout',
  LoginFailure = '[Authentication API] Login Failure',
  LogoutCancelled = '[Authentication] Logout Cancelled',
  LogoutConfirmed = '[Authentication] Logout Confirmed',
  LogoutComplete = '[Authentication API] Logout Complete'

}

export class Login implements Action {
  readonly type = CredentialsActionTypes.Login;

  constructor(public payload: Credentials) {}
}


export class Logout implements Action {
    readonly type = CredentialsActionTypes.Logout;
  }



  export class LoginSuccess implements Action {
    readonly type = CredentialsActionTypes.LoginSuccess;
  
    constructor(public payload: { user: UserModel }) {}
  }


  export class LoginFailure implements Action {
    readonly type = CredentialsActionTypes.LoginFailure;
  
    constructor(public payload: any) {}
  }
  

  export class LogoutCancelled implements Action {
    readonly type = CredentialsActionTypes.LogoutCancelled;
  }
  

export class LogoutConfirmed implements Action {
  readonly type = CredentialsActionTypes.LogoutConfirmed;
}

  export class LogoutComplete implements Action {
    readonly type = CredentialsActionTypes.LogoutComplete;
  }
  
export type CredentialsActions =
| Login
| LoginSuccess
| Logout
| LoginFailure
| LogoutCancelled
| LogoutConfirmed
| LogoutComplete;

  