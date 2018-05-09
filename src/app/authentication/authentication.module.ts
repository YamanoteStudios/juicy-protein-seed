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
import { RouteAuthenticationModule } from './route-authentication.module';


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
 
    ],
    entryComponents: [],
  })
  export class AuthenticationModule {}
  