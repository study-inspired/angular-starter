import { createAction, props } from '@ngrx/store';

export const sendResetPasswordLink = createAction(
  '[RESET PASSWORD] send reset password link',
  props<{ email: string }>()
);

export const sendResetPasswordLinkSuccess = createAction(
  '[RESET PASSWORD] send reset password link success',
  props<{ response: any }>()
);

export const sendResetPasswordLinkFailure = createAction(
  '[RESET PASSWORD] send reset password link failure',
  props<{ error: any }>()
);
