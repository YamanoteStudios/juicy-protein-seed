import { updateGroup, validate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';

import { Member } from '../authentication/models';


export interface State {
  firstName: string;
  lastName: string;
}

export const initialMemberState = {
  firstName: '',
  lastName: '',
  age: null,
};

export const memberGroupValidation = updateGroup<Member>({

});
