import {
  createFormGroupState,
  createFormGroupReducerWithUpdate,
  AbstractControlState,
  FormGroupState,
  updateGroup,
  setErrors,
  setValue,
  cast,
  validate,
} from 'ngrx-forms';



import { Member } from '../authentication/models';
import { Config } from '../authentication/models';
import { minAge } from './utils';
import { initialMemberState, memberGroupValidation } from './member.reducer';
import { initialConfigState, configGroupValidation } from './config.reducer';


export interface FormState {
  form: FormGroupState<RootForm>;
}

export interface RootForm {
  member: Member;
  config: Config;
}
export const initialFormState = createFormGroupState<RootForm>('form', {
  member: initialMemberState,
  config: initialConfigState,
});

export const formReducer = createFormGroupReducerWithUpdate<RootForm>(
  {
    member: memberGroupValidation,
    config: configGroupValidation,
  },
  {
    member: (
      member: AbstractControlState<Member>,
      rootForm: FormGroupState<RootForm>,
    ) =>
      updateGroup<Member>({
        age: (age: AbstractControlState<number>) => {
          const minAgeValue = (<FormGroupState<Config>>rootForm.controls.config)
            .controls.minAge.value;
          return validate(minAge(minAgeValue), age);
        },
      })(cast(member)),
  },
);

export const initialState: FormState = {
  form: initialFormState,
};

export const rootReducer = {
  form: formReducer,
};
