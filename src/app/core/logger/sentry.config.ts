export interface SentryConfiguration {
  dsn: string;
  environment: string;
  release: string;
}

export const defaultSentryConfig: SentryConfiguration = {
  dsn: '<your-dsn>',
  environment: 'dev',
  release: '<your-release>'
};
