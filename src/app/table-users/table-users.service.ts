import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Parking} from '../entities/Parking';


@Injectable()
export class TableUsersService {


  baseURL = 'http://localhost:8080';


  constructor(private httpClient: HttpClient) {
  }

  public deleteParking(parking: Parking): Observable<any> {
    console.log(localStorage.getItem('username'));
    return this.httpClient.delete<any>(this.baseURL + '/deleteParking?address=' + parking.address +
      '&username=' + localStorage.getItem('username') + '&startDate=' + parking.startDate + '&endDate='
      + parking.endDate, {
      responseType: 'json'
    });
  }


  getParkingDetailsByUser(username: string): Observable<Array<Parking>> {
    return this.httpClient.get<Array<Parking>>(this.baseURL + '/getParkingByUser/?username=' + username, {
      responseType: 'json'
    });
  }

}
