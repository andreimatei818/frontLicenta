import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../entities/User';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Parking} from '../entities/Parking';
import {ParkingString} from '../entities/ParkingString';
import {Parking2Date} from '../entities/Parking2Date';

@Injectable()
export class ModalComponentService {
  private baseURL = 'http://localhost:8080';
  private user: User;
  private parkingForTwo: Parking2Date;

  constructor(private httpClient: HttpClient) {
  }

  // addReservation(parking: ParkingString): Observable<Parking> {
  //   const httpHeaders: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
  //   return this.httpClient.post<Parking>(this.baseURL + '/reserveParkingForTwoDate', parking, {
  //     headers: httpHeaders,
  //     responseType: 'json'
  //   });
  //
  //
  // }

  addReservation(parking: ParkingString, initialSt: string, initialE: string): Observable<Parking> {
    debugger;
    this.parkingForTwo = new Parking2Date(parking, initialSt, initialE);

    const httpHeaders: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.post<Parking>(this.baseURL + '/reserveParkingForTwoDate', this.parkingForTwo, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }

}
