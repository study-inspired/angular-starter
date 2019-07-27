import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { AuthService } from './services';
import { Credential, AuthToken, UserProfile } from './models';
import { login, loginSuccess, loginFailure } from './auth.actions';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    map(action => action.credential),
    exhaustMap((credential: Credential) => {
      return this.authService.login(credential).pipe(
        map(() => {
          // TODO
          const authToken: AuthToken = new AuthToken('jasjdhfkjasd', 7200);
          const loggedInUser: UserProfile = { id: '12345', username: 'user 1' };

          return loginSuccess({ authToken, loggedInUser });
        }),
        catchError(error => of(loginFailure({ error })))
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

}
