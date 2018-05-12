import { Injectable } from '@angular/core';
import { UserModel } from '../authentication/models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { Credentials } from '../authentication/models/credentials.model';

const bogusUser = { name: 'Chris', email: 'chris@kayode.me' }

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = false;

  login(verify: Credentials): Observable<UserModel> {
    if (verify.username !== 'ngconf') {
      return throwError('Infatuous credentials !!');
    }

    this.loggedIn = true;
    return of(bogusUser);
  }

  logout() {
    this.loggedIn = false;
    return of(true);
  }

  check() {
    return of(this.loggedIn ? bogusUser : null);
  }}
