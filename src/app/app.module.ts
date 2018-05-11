import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';


/** For Authentication Module */
import { MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouteAuthenticationModule } from '../app/authentication/route-authentication.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from 'src/app/state';
import { LoginViewComponent } from './login-view/login-view.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserHomeComponent } from './user-home/user-home.component';


// import as CONST es6 style
// const NGRX_MODULES =  [
//   StoreModule,
//   StoreDevtoolsModule,
//   EffectsModule
// ];

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule
];

const AUTHENTICATION_MODULES = [
  RouteAuthenticationModule,
  AuthenticationModule
];


@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LoginFormComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...AUTHENTICATION_MODULES,
     MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'Flash News Network',
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
