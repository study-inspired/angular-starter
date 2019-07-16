export class AuthToken {
  expiresAt?: any;

  constructor(
    public accessToken: string,
    public expiresIn: number,
    public tokenType?: string,
    public refreshToken?: string,
    public idToken?: string) {
    this.tokenType = this.tokenType || 'Bearer';
    this.expiresAt = (this.expiresIn * 1000) + new Date().getTime();
  }

  public static isValid(authToken: AuthToken) {
    return (authToken.accessToken && !this.isExpired(authToken));
  }

  public static isExpired(authToken: AuthToken): boolean {
    return new Date().getTime() > authToken.expiresAt;
  }
}
