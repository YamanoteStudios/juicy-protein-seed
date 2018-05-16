import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClient } from '@angular/common/http';
import { cold } from 'jasmine-marbles';
import { AuthenticationEffects } from './authentication.effects';
import { provideMagicalMock, Mock } from 'angular-testing-library';
import { AuthenticationService } from '../services/authentication.service';
import { Observable, of } from 'rxjs';
import { Login, LoginSuccess, LoginFailure } from '../actions/authentication.actions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';


describe('Authentication Effects', () => {
    let effects: AuthenticationEffects;
    let authenticationService: Mock<AuthenticationService>;
    let actions$: Observable<any>;
    let router: Mock<Router>;
    let dialogService: Mock<MatDialog>; 
    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            AuthenticationEffects,
            provideMagicalMock(AuthenticationService),
            provideMagicalMock(Router),
            provideMagicalMock(MatDialog),
            provideMockActions(() => actions$)
          ],
        });

    effects = TestBed.get(AuthenticationEffects);
    authenticationService = TestBed.get(AuthenticationService);
    dialogService = TestBed.get(MatDialog);
    router = TestBed.get(Router);
    });



})