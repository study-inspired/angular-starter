import { ErrorHandler, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import * as Sentry from '@sentry/browser';

import { defaultSentryConfig } from './sentry.config';
import { ClientErrorHandler } from './handlers';
import { ServerErrorInterceptor } from './interceptors';

const APP_ERROR_HANDLER = defaultSentryConfig.enable
  ? [
      { provide: ErrorHandler, useClass: ClientErrorHandler },
      { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
    ]
  : [];

Sentry.init({
  dsn: defaultSentryConfig.dsn,
  environment: defaultSentryConfig.environment,
  enabled: defaultSentryConfig.enable,
  release: defaultSentryConfig.release
});

@NgModule({
  imports: [
    CommonModule
  ]
})
export class SentryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SentryModule,
      providers: [
        ...APP_ERROR_HANDLER
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: SentryModule) {
    if (parentModule) {
      throw new Error('SentryModule is already loaded. Import only in AppModule!');
    }
  }
}
