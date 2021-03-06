// Native angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';

import { NgrxFormsModule } from 'ngrx-forms';

// Custom Modules & Components 
import { RouteAuthenticationModule } from './route-authentication.module';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { LogoutPromptComponent } from './components/logout-prompt/logout-prompt.component';
import { AuthenticationEffects } from '../authentication/effects/authentication.effects';
import { IcosComponent } from './components/icos/icos.component';


const NATIVE_MODULES = [
  NgModule,
  CommonModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  EffectsModule,
  NgrxFormsModule,
];


const CUSTOM_MODULES = [
  RouteAuthenticationModule
];

const CUSTOM_COMPONENTS = [
  LoginViewComponent,
  UserHomeComponent,
  LogoutPromptComponent,
  LoginFormComponent,
  IcosComponent,
]


@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatInputModule,
      ReactiveFormsModule,
      RouteAuthenticationModule,      
      EffectsModule.forFeature([AuthenticationEffects]),
    
    ],
    declarations: [
      ...CUSTOM_COMPONENTS
      
    ],
    entryComponents: [LogoutPromptComponent],
  })
  export class AuthenticationModule {}
  