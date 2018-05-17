import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFixture, provideMagicalMock } from 'angular-testing-library';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginViewComponent } from '../login-view/login-view.component';
import { Login } from '../../actions/authentication.actions';

describe('Login View Component', () => {
  const fixture = createComponentFixture({
    component: LoginViewComponent,
    declarations: [LoginFormComponent],
    providers: [
      provideMagicalMock(Store)
    ]
  });
  
  const error$ = new BehaviorSubject<string>('');
  const pending$ = new BehaviorSubject<boolean>(false);
  let store: Store<any>;

  beforeEach(async() => {
    await fixture.compile({
      error$,
      pending$
    });

    store = fixture.get(Store);    
  });

  it('should compile', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch an action when onLogin is called', () => {
    const credentials = {
      username: 'test',
      password: 'test'
    };

    fixture.instance.onLogin(credentials);

    expect(store.dispatch).toHaveBeenCalledWith(new Login(credentials));
  });
});
