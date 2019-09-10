import { createFeatureSelector, Action, combineReducers } from '@ngrx/store';

import { featureKey } from '../contact.config';
import * as fromContact from './contact.reducer';

export interface ContactState {
  contact: fromContact.State;
}

export function reducer(state: ContactState | undefined, action: Action) {
  return combineReducers({
    contact: fromContact.reducer
  })(state, action);
}

export const selectContactState = createFeatureSelector<ContactState>(featureKey);
