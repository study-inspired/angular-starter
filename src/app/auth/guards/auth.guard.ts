import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, distinctUntilChanged, take } from 'rxjs/operators';

import { AUTH_CONFIGURATION, AuthConfiguration, defaultAuthConfig } from '../auth.config';
import { AuthState } from '../reducers';
import { selectIsAuthenticated } from '../selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly loginURI: string;

  constructor(
    private router: Router,
    private store: Store<AuthState>,
    @Inject(AUTH_CONFIGURATION) config: AuthConfiguration,
  ) {
    this.loginURI = config.loginURL ? config.loginURL : defaultAuthConfig.loginURL;
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(selectIsAuthenticated),
      distinctUntilChanged(),
      take(1),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate([this.loginURI]);
        }
      })
    );
  }
}
