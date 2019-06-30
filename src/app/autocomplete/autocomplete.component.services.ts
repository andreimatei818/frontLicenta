import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Parking} from '../entities/Parking';
import {Suggestions} from '../entities/Suggestions';


@Injectable()
export class AutocompleteComponentServices {

  baseURL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  getParkingDetailsByUser(username: string): Observable<Array<Parking>> {
    return this.httpClient.get<Array<Parking>>(this.baseURL + '/getListAllParkingAddress', {
      responseType: 'json'
    });
  }

  getStreet(): Observable<Array<Suggestions>> {
    return this.httpClient.get<Array<Suggestions>>('http://autocomplete.geocoder.api.here.com/6.2/suggest.json?query=Octavian&country=ROU&app_code=_ketCycjQ-mEtVlMO_OGTw&app_id=0dNbIEXdo0XceyL4mbY7', {
      responseType: 'json'
    });
  }


  goToReserve(row) {
    console.log(row);
  }
}
