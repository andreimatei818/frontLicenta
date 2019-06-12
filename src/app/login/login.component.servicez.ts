import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../entities/User';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class LoginComponentService {
  private baseURL = 'http://localhost:8080';
  private user: User;

  constructor(private httpClient: HttpClient) {
  }

  logIn(user: User): Observable<User> {
    const httpHeaders: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.post<User>(this.baseURL + '/login', user, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }



}
