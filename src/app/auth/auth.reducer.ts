import { createReducer, on, Action } from '@ngrx/store';

import { AuthToken, UserProfile } from './models';
import { loginSuccess, logout } from './auth.actions';
export interface AuthState {
  authToken: AuthToken;
  loggedInUser: UserProfile;
}

const initialState: AuthState = {
  authToken: undefined,
  loggedInUser: undefined
};

const reducer = createReducer(
  initialState,
  on(loginSuccess, (state, { authToken, loggedInUser }) => ({ ...state, authToken, loggedInUser })),
  on(logout, () => initialState)
);

export function authReducer(state: AuthState, action: Action) {
  return reducer(state, action);
}
