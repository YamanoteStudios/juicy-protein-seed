import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication/services/authentication.service';


const applicationRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(applicationRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingApplicationModule {}
