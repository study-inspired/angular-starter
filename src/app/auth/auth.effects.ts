import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Credential, AuthToken } from './models';
import { AuthActionTypes, Login, LoginSuccess, LoginFailure } from './auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LOGIN),
    map(action => action.payload.credential),
    switchMap((credential: Credential) => this.authService.login(credential)),
    map((res: any) => {
      // TODO new AuthToken
      const token = new AuthToken('jasjdhfkjasd', 7200);
      return new LoginSuccess({ authToken: token });
    }),
    catchError(error => of(new LoginFailure({ error })))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

}
