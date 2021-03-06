import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../DialogData';
import {DateTimeModel} from '../date-time-picker/date-time.model';
import {Parking} from '../entities/Parking';
import {ModalComponentService} from './modal.component.service';
import {formatDate} from '@angular/common';
import {ParkingString} from '../entities/ParkingString';
import {Parking2Date} from '../entities/Parking2Date';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private startDate: DateTimeModel;
  public startDateInitial: DateTimeModel;
  public endDateInitial: DateTimeModel;
  private endDate: DateTimeModel;
  parking: ParkingString;
  public selectedMoment2 = new Date();
  public min: DateTimeModel;
  public max: DateTimeModel;
  parkingForTwoDate: Parking2Date;
  initialE: Date;
  intiatiS: Date;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>, private modalService: ModalComponentService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log('aici');
    console.log(this.data.parking.address);
    this.endDateInitial = this.data.parking.endDate;
    this.startDateInitial = this.data.parking.startDate;
    this.min = this.startDateInitial;
    this.max = this.endDateInitial;


  }

  createRegistration(): ParkingString {
    const locale = 'en-US';
    const format = 'yyyy-MM-ddTHH:mm';
    return {
      id: this.data.parking.id,
      address: this.data.parking.address,
      comment: this.data.parking.comment,
      startDate: formatDate(this.selectedMoment2[0], format, locale),
      endDate: formatDate(this.selectedMoment2[1], format, locale),
      isFree: this.data.parking.isFree,
      username: localStorage.getItem('username')
    }
      ;
  }

  createRegistration2(): ParkingString {
    const locale = 'en-US';
    const format = 'yyyy-MM-ddTHH:mm';
    return {
      id: this.data.parking.id,
      address: this.data.parking.address,
      comment: this.data.parking.comment,
      startDate: formatDate(this.startDateInitial[0], format, locale),
      endDate: formatDate(this.selectedMoment2[1], format, locale),
      isFree: this.data.parking.isFree,
      username: localStorage.getItem('username')
    }
      ;
  }


  // createParkingForTwo(): Parking2Date {
  //
  //   this.parkingForTwoDate.parking = this.createRegistration();
  //   this.parkingForTwoDate.initialStartDate = formatDate(this.startDateInitial.toString(), format, locale);
  //   this.parkingForTwoDate.initialEndDate = formatDate(this.endDate.toString(), format, locale);
  //   return this.parkingForTwoDate;
  // }

  save() {
    this.parking = this.createRegistration();
    const locale = 'en-US';
    const format = 'yyyy-MM-ddTHH:mm';
    console.log('start date ', this.parking.id);
    console.log('start date ', this.parking.startDate);
    console.log('end date', this.parking.endDate);
    console.log('street', this.parking.address);
    console.log('details', this.parking.comment);
    console.log('is free', this.parking.isFree);
    this.modalService.addReservation(this.parking, this.min.toString(), this.max.toString())
      .subscribe(value => {
          alert('Location was saved ');
        }, error1 => {
          alert('Err');
        }
      );
  }

  // save() {
  //   this.parkingForTwoDate = this.createParkingForTwo();
  //
  //   console.log('start date ', this.parking.id);
  //   console.log('start date ', this.parking.startDate);
  //   console.log('end date', this.parking.endDate);
  //   console.log('street', this.parking.address);
  //   console.log('details', this.parking.comment);
  //   console.log('is free', this.parking.isFree);
  //
  //   this.modalService.addReservation(this.parkingForTwoDate).subscribe(value => {
  //       alert('Location was saved ');
  //     }, error1 => {
  //       alert('Err');
  //     }
  //   );
  // }

}
