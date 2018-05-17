import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState, AbstractControlState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { Member } from '../../models/member.model';
import { FormState } from '../../../state/root-form.reducer';


@Component({
  selector: 'newsn-newsn-forms',
  templateUrl: './newsn-forms.component.html',
  styleUrls: ['./newsn-forms.component.css']
})
export class NewsnFormsComponent {
  newsnForm$: Observable<FormGroupState<Member>>;

  constructor(private store: Store<FormState>) {
    this.newsnForm$ = store.pipe(
      select(state => <FormGroupState<Member>>state.form.controls.member),
    );
  }
}
