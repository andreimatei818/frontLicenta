import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../entities/User';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Parking} from '../entities/Parking';
import {ParkingString} from '../entities/ParkingString';

@Injectable()
export class ModalComponentService {
  private baseURL = 'http://localhost:8080';
  private user: User;

  constructor(private httpClient: HttpClient) {
  }

  addReservation(parking: ParkingString): Observable<Parking> {

    const httpHeaders: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.post<Parking>(this.baseURL + '/reserveParking', parking, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }




}
