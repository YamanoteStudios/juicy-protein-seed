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


// Custom Modules & Components 
import { RouteAuthenticationModule } from './route-authentication.module';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { LogoutPromptComponent } from './components/logout-prompt/logout-prompt.component';
import { AuthenticationEffects } from '../authentication/effects/authentication.effects';


const NATIVE_COMPONENTS = [];
const NATIVE_MODULES = [
  NgModule,
  CommonModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  EffectsModule,
];


const CUSTOM_MODULES = [
  RouteAuthenticationModule
];

const CUSTOM_COMPONENTS = [
  LoginViewComponent,
  UserHomeComponent,
  LogoutPromptComponent,
  LoginFormComponent,
]


@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatInputModule,
      ReactiveFormsModule,
      EffectsModule.forFeature([AuthenticationEffects]),
    
    ],
    declarations: [
      ...CUSTOM_COMPONENTS
      
    ],
    entryComponents: [LogoutPromptComponent],
  })
  export class AuthenticationModule {}
  