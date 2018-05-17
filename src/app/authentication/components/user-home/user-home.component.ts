import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/state';

// Grab the Logout Actions
import { Logout } from 'src/app/authentication/actions/authentication.actions';

import {CoinsService} from '../../services/coins.service';

@Component({
  selector: 'newsn-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private store: Store<fromStore.State>,
              private coinsServices: CoinsService) { }

    getCoins(): void {
      this.coinsServices.getCoins;
    }


    logout(){
      // create a dispatch  fromstore to logOut.
      // console.log(' Logout function called !!')
      this.store.dispatch(new Logout());
      console.log(new Logout());
    }

    ngOnInit() {
      this.getCoins();

    }

}
