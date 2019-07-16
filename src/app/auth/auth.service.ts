import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Credential } from './models/credential.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(credential: Credential): Observable<any> {
    return this.http.post('login', credential);
  }

  public refreshToken(token: string): Observable<any> {
    return this.http.post('refresh', { token: token });
  }

}
