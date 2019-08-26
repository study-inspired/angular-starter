import { ErrorHandler, Injectable } from '@angular/core';

import * as Sentry from '@sentry/browser';

@Injectable()
export class ClientErrorHandler implements ErrorHandler {

  constructor() {
  }

  handleError(error: any) {
    Sentry.captureException(error.originalError || error);
  }
}
