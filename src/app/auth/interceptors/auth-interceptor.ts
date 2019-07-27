import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { AUTH_CONFIGURATION, AuthConfiguration } from '../auth.config';
import { AuthToken } from '../models';
import { AuthState, selectAuthToken } from '../store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<AuthState>,
    @Inject(AUTH_CONFIGURATION) private config: AuthConfiguration
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.isWhitelistedDomain(req) || this.isBlacklistedRoute(req)) {
      return next.handle(req);
    }

    return this.store.pipe(
      select(selectAuthToken),
      take(1),
      mergeMap((authToken: AuthToken) => {
        const tokenIsValid = AuthToken.isValid(authToken);

        if (!tokenIsValid && this.config.skipWhenExpired) {
          return next.handle(req);
        }

        const request = req.clone({
          setHeaders: { [this.config.headerName]: `${authToken.tokenType} ${authToken.accessToken}` }
        });

        return next.handle(request);
      })
    );
  }

  private isWhitelistedDomain(request: HttpRequest<any>): boolean {
    const parser = document.createElement('a');
    parser.href = request.url;
    const requestHost = parser.host;

    return (
      requestHost === null ||
      this.config.whitelistedDomains.findIndex(
        domain =>
          typeof domain === 'string'
            ? domain.includes(requestHost)
            : domain instanceof RegExp
              ? domain.test(requestHost)
              : false
      ) > -1
    );
  }

  private isBlacklistedRoute(request: HttpRequest<any>): boolean {
    const url = request.url;

    return (
      this.config.blacklistedRoutes.findIndex(
        route =>
          typeof route === 'string'
            ? url.includes(route)
            : route instanceof RegExp
              ? route.test(url)
              : false
      ) > -1
    );
  }

}
