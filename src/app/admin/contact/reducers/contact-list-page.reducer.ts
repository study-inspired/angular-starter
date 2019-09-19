import { createReducer, on } from '@ngrx/store';

import { ContactActions } from '../actions';

export interface State {
  pending: boolean;
}

export const initialState: State = {
  pending: false
};

export const reducer = createReducer(
  initialState,

  on(
    ContactActions.findContact,
    ContactActions.findContactById,
    (state) => ({ ...state, pending: true })
  ),

  on(
    ContactActions.findContactSuccess,
    ContactActions.findContactFailure,
    ContactActions.findContactByIdSuccess,
    ContactActions.findContactByIdFailure,
    (state) => ({ ...state, pending: false })
  )
);
