export interface SentryConfiguration {
  dsn: string;
  environment: string;
  enable: boolean;
  release: string;
}

export const defaultSentryConfig: SentryConfiguration = {
  dsn: '<your-dsn>',
  environment: 'dev',
  enable: false,
  release: '<your-release>'
};
