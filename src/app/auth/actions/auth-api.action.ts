import { props, createAction } from '@ngrx/store';

import { HttpException } from '@app/core/http';
import { AuthToken } from '../models';

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ authToken: AuthToken }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: {action: any; error: HttpException} }>()
);
