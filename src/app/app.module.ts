// Native Angular Modules ....
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


// Angular Redux
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// From Google Material Theme 
import { MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';

/** For Authentication Module */
import { RoutingApplicationModule } from './routing-application.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { reducers, metaReducers } from 'src/app/state';
  
// Other Application-Specific Modules
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

const ANGULAR_MODULES = [
  HttpClientModule,
  BrowserAnimationsModule,
  BrowserModule,
]


// Angular Redux ....
const NGRX_MODULES =  [
  StoreDevtoolsModule,
  EffectsModule,
  metaReducers
];
// Angular Material ...
const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule
];
// Custom Modules ...
const AUTHENTICATION_MODULES = [
  RoutingApplicationModule,
  AuthenticationModule
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...MATERIAL_MODULES,
    ...AUTHENTICATION_MODULES,
    ...NGRX_MODULES,
    ...ANGULAR_MODULES,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'Flash News Network',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
