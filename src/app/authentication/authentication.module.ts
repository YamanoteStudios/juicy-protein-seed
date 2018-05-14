import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
} from '@angular/material';

import {AppComponent} from '../app.component';
import { EffectsModule } from '@ngrx/effects';
import { RouteAuthenticationModule } from './route-authentication.module';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { LogoutPromptComponent } from './components/logout-prompt/logout-prompt.component';



@NgModule({
    imports: [
      CommonModule,
      RouteAuthenticationModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatInputModule,
      ReactiveFormsModule,
    
    ],
    declarations: [
      LoginViewComponent,
      LoginFormComponent,
      LogoutPromptComponent,
      UserHomeComponent,
      
    ],
    entryComponents: [AppComponent],
  })
  export class AuthenticationModule {}
  