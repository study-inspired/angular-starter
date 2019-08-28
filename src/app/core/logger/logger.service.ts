export abstract class LoggerService {

  abstract captureException(error: Error, context: any);

  abstract captureInfo(message: string, tags: any);

}
