import {Component, OnInit} from '@angular/core';
import {AutocompleteComponentServices} from './autocomplete.component.services';
import {LocationDetails} from '../entities/LocationDetails';
import {Parking} from '../entities/Parking';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';
import {Address} from "../entities/Address";
import {Suggestions} from "../entities/Suggestions";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor(private autocompleteService: AutocompleteComponentServices, public dialog: MatDialog) {
  }

  private historyList2: Array<Suggestions> = new Array<Suggestions>();
  private listAddress: Array<Address> = new Array<Address>();

  ngOnInit() {
    this.getStreet();
    this.getAddress();
  }

  getStreet() {
    this.autocompleteService.getStreet().subscribe(value => {
      this.historyList2 = value;
    });

    debugger;
  }

  getAddress(){
   console.log(this.historyList2);
  }
  goToReserve(row: Parking) {
    console.log(row);
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(ModalComponent, {
      autoFocus: true,
      data: {parking: row}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('bla');
    });
  }
}
