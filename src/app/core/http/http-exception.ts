export interface HttpException {
  ok?: boolean;
  type?: string;
  message: string;
  status: number;
  statusText: string;
}
