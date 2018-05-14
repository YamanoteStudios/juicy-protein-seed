import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication/services/authentication.service';


const ROUTES = [
   // Add a route here
    { path: '', pathMatch: 'full', redirectTo: 'home' }
]


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/home' }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingApplicationModule {}
