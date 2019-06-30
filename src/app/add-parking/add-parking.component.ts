import {Component, OnInit} from '@angular/core';
import {DateTimeModel} from '../date-time-picker/date-time.model';
import {Parking} from '../entities/Parking';
import {RegisterUser} from '../entities/RegisterUser';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AddParkingComponentService} from './add-parking.component.services';
import {formatDate} from '@angular/common';
import {ParkingString} from '../entities/ParkingString';
import {locale} from 'moment';

@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.css']
})
export class AddParkingComponent implements OnInit {

  constructor(private router: Router, private serviceParking: AddParkingComponentService) {

  }

  public street: string;
  public details: string;
  public startDate: DateTimeModel;
  public endDate: DateTimeModel;
  parking: Parking;
  parking2: ParkingString;
  registerData: FormGroup;
  private dateNow: DateTimeModel;
  private isFree: boolean;
  public selectedMoment2 = new DateTimeModel();
  private min = new Date();
  private dateStartModel = new Date();
  private date: string;

  ngOnInit() {
    this.dateNow = new DateTimeModel();
    if (localStorage.getItem('username') == null) {
      this.router.navigate(['/login']);
    }

  }

  createRegistration(): ParkingString {
    // tslint:disable-next-line:no-shadowed-variable
    const locale = 'en-US';
    const format = 'yyyy-MM-ddTHH:mm';
    return {
      id: null,
      address: this.street,
      comment: this.details,
      startDate: formatDate(this.selectedMoment2[0], format, locale),
      endDate: formatDate(this.selectedMoment2[1], format, locale),
      isFree: this.isFree,
      username: localStorage.getItem('username')
    }
      ;
  }

  getRegistaration() {
    this.parking2 = this.createRegistration();
    this.street = ' ';
    this.serviceParking.addParking(this.parking2).subscribe(value => {
        alert('Location was saved ');
      }, error1 => {
        alert('Err');
      }
    );
    this.selectedMoment2 = new DateTimeModel();
  }


}
