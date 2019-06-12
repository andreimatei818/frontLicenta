import {Component, OnInit} from '@angular/core';
import {DateTimeModel} from '../date-time-picker/date-time.model';
import {Parking} from '../entities/Parking';
import {RegisterUser} from '../entities/RegisterUser';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AddParkingComponentService} from './add-parking.component.services';

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
  registerData: FormGroup;
  public dateNow: DateTimeModel;
  public isFree: boolean;


  ngOnInit() {
    this.dateNow = new DateTimeModel();
    if (localStorage.getItem('username') == null) {
      this.router.navigate(['/login']);
    }

  }

  createRegistration(): Parking {
    return {
      address: this.street,
      comment: this.details,
      startDate: this.startDate,
      endDate: this.endDate,
      isFree: this.isFree,
      username: localStorage.getItem('username')
    }
      ;
  }

  getRegistaration() {
    this.parking = this.createRegistration();
    console.log('start date ', this.parking.startDate);
    console.log('end date', this.parking.endDate);
    console.log('street', this.parking.address);
    console.log('details', this.parking.comment);
    console.log('is free', this.parking.isFree);

    this.serviceParking.addParking(this.parking).subscribe(value => {
        alert('Location was saved ');
      }, error1 => {
        alert('Err');
      }
    );
  }


}
