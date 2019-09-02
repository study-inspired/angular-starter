/**
 * Logger configuration
 *
 * @enable enable logger service
 */
export interface LoggerConfiguration {
  enable: boolean;
}

export const defaultLoggerConfig: LoggerConfiguration = {
  enable: false
};