import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthConfig } from './auth.config';
import { AuthState } from './auth.reducer';
import { selectIsAuthenticated } from './auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AuthState>
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(selectIsAuthenticated),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate([AuthConfig.loginURI]);
        }
      })
    );
  }
}
