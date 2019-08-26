import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as Sentry from '@sentry/browser';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status.toString().match('^5[0-9]{2}$')) {
      Sentry.withScope(scope => {
        scope.setContext(error.message, {
          tags: {
            error: error.error,
            message: error.message,
            name: error.name,
            status: error.status
          },
          level: Sentry.Severity.Error
        });
        Sentry.captureException(new Error('Http Error'));
      });
    }

    const errorMessage = error.error.message || error.error;

    return throwError({
      message: typeof errorMessage === 'string' && errorMessage || 'Unknown error',
      status: error.status
    });
  }

}
