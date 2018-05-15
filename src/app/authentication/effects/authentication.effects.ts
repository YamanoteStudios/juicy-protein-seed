// Third Party Modules
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { of, empty } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';


// Custom Code
import {
  CredentialsActions,
  CredentialsActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
  Logout,
  LogoutConfirmed,
  LogoutComplete,
  LogoutCancelled,
} from '../actions/authentication.actions';
import { AuthenticationService } from '../services/authentication.service';

import {LogoutPromptComponent} from '../components/logout-prompt/logout-prompt.component';


@Injectable()
export class AuthenticationEffects {
    // ngrx Effect Decorator
    @Effect()
    login$ = this.actions$
    .ofType<Login>(CredentialsActionTypes.Login)
    .pipe(
      map(action => action.payload),
      exhaustMap(authenticated =>
        this.authenticationService
          .login(authenticated)
          .pipe(
            map(user => new LoginSuccess({ user })),
            catchError(error => of(new LoginFailure(error))),
          ),
      ),
    );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .ofType<LoginSuccess>(CredentialsActionTypes.LoginSuccess)
    .pipe(tap(() => this.router.navigate(['/home'])));

  @Effect()
  logoutConfirmation$ = this.actions$
    .ofType<Logout>(CredentialsActionTypes.Logout)
    .pipe(
      exhaustMap(() =>
        this.dialogService
          .open(LogoutPromptComponent)
          .afterClosed()
          .pipe(
            map(confirmed => {
              if (confirmed) {
                return new LogoutConfirmed();
              } else {
                return new LogoutCancelled();
              }
            })
          ),
      ),
    );

  @Effect({ dispatch: false })
  logout$ = this.actions$
    .ofType<LogoutConfirmed>(CredentialsActionTypes.LogoutConfirmed)
    .pipe(
      exhaustMap(auth =>
        this.authenticationService
          .logout()
          .pipe(
            tap(() => this.router.navigate(['/login'])),
            map(() => new LogoutComplete()),
            catchError(() => of(new LogoutComplete())),
          ),
      ),
    );

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService,
    private router: Router,
    private dialogService: MatDialog,
  ) {}
}
