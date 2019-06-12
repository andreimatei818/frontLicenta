import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../entities/User';
import {Injectable} from '@angular/core';
import {RegisterUser} from '../entities/RegisterUser';
import {Observable} from 'rxjs';


@Injectable()
export class RegisterComponentService {
  private baseURL = 'http://localhost:8080';
  private user: User;
  private registerUser: RegisterUser;

  constructor(private httpClient: HttpClient) {
  }

  register(registerUser2: RegisterUser): Observable<RegisterUser> {
    this.registerUser = registerUser2;
    const httpHeaders: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.post<RegisterUser>(this.baseURL + '/register', this.registerUser, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }


}
