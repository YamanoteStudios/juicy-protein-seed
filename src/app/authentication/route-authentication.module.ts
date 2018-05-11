import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginViewComponent } from './components/login-view/login-view.component';

  @NgModule({
    imports: [
      RouterModule.forRoot([
        { path: 'login', component: LoginViewComponent }
  ]),
    ],
    exports: [
      RouterModule
    ]
  })
  export class RouteAuthenticationModule {}
  