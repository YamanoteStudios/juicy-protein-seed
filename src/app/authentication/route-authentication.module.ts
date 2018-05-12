import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

  @NgModule({
    imports: [
      RouterModule.forRoot([
        { path: 'login', component: LoginViewComponent },
        {
          path: 'home',
          component: UserHomeComponent,
         // TODO: create a AuthGuardService
        }
        
  ]),
    ],
    exports: [
      RouterModule
    ]
  })
  export class RouteAuthenticationModule {}
  