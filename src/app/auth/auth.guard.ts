import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, distinctUntilChanged, take } from 'rxjs/operators';

import { AUTH_CONFIGURATION, AuthConfiguration } from './auth.config';
import { AuthState } from './auth.reducer';
import { selectIsAuthenticated } from './auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AuthState>,
    @Inject(AUTH_CONFIGURATION) private config: AuthConfiguration,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(selectIsAuthenticated),
      distinctUntilChanged(),
      take(1),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate([this.config.loginURI]);
        }
      })
    );
  }
}
