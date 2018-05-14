import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/state';

// Grab the Logout Actions
import { Login } from '../../actions/authentication.actions';

//Grab Credentials Models 
import {Credentials} from '../../models/credentials.model';

@Component({
  selector: 'newsn-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  error$ = this.store.select(fromStore.selectLoginViewError);
  pending$ = this.store.select(fromStore.selectLoginViewPending);


  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
  }

  onLogin(credentials: Credentials) {
    this.store.dispatch(new Login(credentials));
  }
}
