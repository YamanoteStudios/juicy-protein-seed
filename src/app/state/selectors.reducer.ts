import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  FormGroupState,
  ValidationErrors,
  AbstractControlState,
} from 'ngrx-forms';
import { Observable } from 'rxjs';

import { FormState, RootForm } from '../state/root-form.reducer';
import { Member } from '../../app/authentication/models';

@Injectable()
export class InvalidFieldsSelector {
  appErrors$: Observable<number>;
  personErrors$: Observable<number>;
  configErrors$: Observable<number>;

  constructor(private store: Store<FormState>) {
    this.appErrors$ = store.pipe(
      select(state => countValidationErrors(state.form)),
    );
    this.personErrors$ = store.pipe(
      select(state => countValidationErrors(state.form.controls.member)),
    );
    this.configErrors$ = store.pipe(
      select(state => countValidationErrors(state.form.controls.config)),
    );
  }
}

function countValidationErrors(control: AbstractControlState<any>): number {
  const subControl = (<FormGroupState<any>>control).controls;
  if (control.isPristine) {
    return 0;
  }
  if (!subControl) {
    return Object.keys(control.errors).length;
  }
  return Object.keys(subControl).reduce((errors, key) => {
    return countValidationErrors(subControl[key]) + errors;
  }, 0);
}
