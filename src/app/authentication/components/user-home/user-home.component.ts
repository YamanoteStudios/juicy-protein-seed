import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/state';

// Grab the Logout Actions
import { Logout } from '../../actions/authentication.actions';


@Component({
  selector: 'newsn-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  constructor(private store: Store<fromStore.State>) { }

    logout(){
      // create a dispatch  fromstore to logOut.
      // console.log(' Logout function called !!')
      this.store.dispatch(new Logout());
      console.log(new Logout());
    }

}
