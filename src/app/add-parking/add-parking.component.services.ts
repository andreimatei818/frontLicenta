import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../entities/User';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Parking} from '../entities/Parking';

@Injectable()
export class AddParkingComponentService {
  private baseURL = 'http://localhost:8080';
  private user: User;

  constructor(private httpClient: HttpClient) {
  }

  addParking(parking: Parking): Observable<Parking> {
    console.log(parking);
    console.log('sadasdsa');
    console.log(parking.isFree);
    const httpHeaders: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.post<Parking>(this.baseURL + '/parking', parking, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }




}
