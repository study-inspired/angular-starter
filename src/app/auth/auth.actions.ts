import { Action } from '@ngrx/store';
import { Credential } from './models/credential.model';
import { UserProfile } from './models/user.model';
import { AuthToken } from './models/auth-token.model';

export enum AuthActionTypes {
  LOGIN = '[Login Page] Login',
  LOGIN_SUCCESS = '[Auth/API] Login Success',
  LOGIN_FAILURE = '[Auth/API] Login Failure',
  LOGIN_REDIRECT = '[Auth/API] Login Redirect',

  LOCK = '[Auth] Lock screen',
  LOGOUT = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(public payload: { credential: Credential }) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { authToken: AuthToken }) { }
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;

  constructor(public payload: { error: any }) { }
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LOGIN_REDIRECT;
}

export class Lock implements Action {
  readonly type = AuthActionTypes.LOCK;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = Login | LoginSuccess | LoginFailure | LoginRedirect | Lock | Logout;
