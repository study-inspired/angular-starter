/**
 * Abstract class for logger Service
 * A service tracking error and logging info
 * Tracking for easy fixes
 * Logging for improving the quality
 *
 * @author Luan Tran
 */
export abstract class LoggerService {

  /**
   * capture exception to logging platform
   *
   * @param(Error) error
   * @param() context
   */
  abstract captureException(error: Error, context: any);

  /**
   * capture info to logging platform
   *
   * @param(string) message
   * @param() tags
   */
  abstract captureInfo(message: string, tags: any);

}
