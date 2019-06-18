import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../DialogData';
import {FormGroup} from "@angular/forms";
import {DateTimeModel} from "../date-time-picker/date-time.model";
import {Parking} from "../entities/Parking";
import {AddParkingComponentService} from "../add-parking/add-parking.component.services";
import {ModalComponentService} from "./modal.component.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public startDate: DateTimeModel;
  public endDate: DateTimeModel;
  parking: Parking;
  public dateNow: DateTimeModel;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>, private modalService: ModalComponentService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data.parking.address);
  }

  createRegistration(): Parking {
    return {
      id:this.data.parking.id,
      address: this.data.parking.address,
      comment: this.data.parking.comment,
      startDate: this.startDate,
      endDate: this.endDate,
      isFree: this.data.parking.isFree,
      username: localStorage.getItem('username')
    }
      ;
  }

  save() {
    this.parking = this.createRegistration();
    console.log('start date ', this.parking.id);
    console.log('start date ', this.parking.startDate);
    console.log('end date', this.parking.endDate);
    console.log('street', this.parking.address);
    console.log('details', this.parking.comment);
    console.log('is free', this.parking.isFree);

    this.modalService.addReservation(this.parking).subscribe(value => {
        alert('Location was saved ');
      }, error1 => {
        alert('Err');
      }
    );
  }

}
