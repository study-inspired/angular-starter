import { createAction, props } from '@ngrx/store';
import { AuthToken, Credential, UserProfile } from './models';

export const login = createAction(
  '[Login Page] Login',
  props<{ credential: Credential }>()
);

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ authToken: AuthToken, loggedInUser: UserProfile }>()
);

export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{ error: any }>()
);

export const loginRedirect = createAction('[Login Page] Login Redirect');
export const lock = createAction('[Auth] Lock screen');
export const logout = createAction('[Auth] Logout');
