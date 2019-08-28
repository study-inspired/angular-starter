import { ErrorHandler, Injectable } from '@angular/core';

import { LoggerService, defaultLoggerConfig } from '../logger';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(private loggerService: LoggerService) {
    super();
  }

  handleError(error: Error) {
    if (!defaultLoggerConfig.enable) {
      return super.handleError(error);
    }

    this.loggerService.captureException(error, null);
  }
}
