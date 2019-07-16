import { AuthActions, AuthActionTypes } from './auth.actions';
import { AuthToken } from './models';

export interface AuthState {
  isAuthenticated: boolean;
  authToken: AuthToken;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  authToken: {
    accessToken: 'hahah',
    expiresIn: 7200
  }
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LOGIN:
      return state;

    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        authToken: action.payload.authToken
      };


    default:
      return state;
  }
}
