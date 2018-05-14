
// Native Components
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



// Custom Components
import { LoginViewComponent } from './components/login-view/login-view.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import {
  AuthenticationGuardService
} from './services/authentication-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginViewComponent },
      {
        path: 'home',
        component: UserHomeComponent,
        canActivate: [AuthenticationGuardService],
      }

    ]),
  ],
  providers: [AuthenticationGuardService]
})
export class RouteAuthenticationModule { }
