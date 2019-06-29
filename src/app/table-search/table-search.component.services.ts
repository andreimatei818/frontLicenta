import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Parking} from '../entities/Parking';


@Injectable()
export class TableSearchComponentServices {

  baseURL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  getParkingDetailsByUser(username: string): Observable<Array<Parking>> {
    return this.httpClient.get<Array<Parking>>(this.baseURL + '/getListAllParkingAddress', {
      responseType: 'json'
    }) ;
  }
  goToReserve(row)
  {
    console.log(row);
  }
}
