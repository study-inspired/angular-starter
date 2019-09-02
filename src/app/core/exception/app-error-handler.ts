import { ErrorHandler, Injectable } from '@angular/core';

import { LoggerService, defaultLoggerConfig } from '../logger';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(private loggerService: LoggerService) {
    super();
  }

  handleError(error: Error) {
    super.handleError(error);

    if (defaultLoggerConfig.enable) {
      this.loggerService.captureException(error, null);
    }

  }
}
