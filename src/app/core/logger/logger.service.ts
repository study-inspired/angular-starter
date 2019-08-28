export interface ILoggerService {

  captureException(error: Error, context: any);

  captureInfo(message: string, tags: any);

}

export class LoggerService implements ILoggerService {

  captureException(error: Error, context: any) {
    console.log(error, context);
  }

  captureInfo(message: string, tags: any) {
     console.log(message, tags);
  }

}
