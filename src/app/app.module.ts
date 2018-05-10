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

// import as CONST es6 style
const NGRX_MODULES =  [
  StoreModule,
  StoreDevtoolsModule,
  EffectsModule
];

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...AUTHENTICATION_MODULES,
    ...MATERIAL_MODULES,
    ...NGRX_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
