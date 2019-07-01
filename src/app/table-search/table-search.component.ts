import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Parking} from '../entities/Parking';
import {Router} from '@angular/router';
import {TableSearchComponentServices} from './table-search.component.services';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {LocationDetails} from '../entities/LocationDetails';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css']
})
export class TableSearchComponent implements OnInit {

  private historyList: Array<Parking> = new Array<Parking>();

  private historyList2: Array<LocationDetails> = new Array<LocationDetails>();
  @ViewChild('map')
  public mapElement: ElementRef;

  private username: string;
  private query: string;
  constructor(private router: Router, private tableService: TableSearchComponentServices, public dialog: MatDialog) {
  }

  ngOnInit() {
    if (localStorage.getItem('username') == null) {
      this.router.navigate(['/login']);
    }
    this.username = localStorage.getItem('username');
    this.getParking();
    this.getStreet();
    this.query = 'a';
  }

  getParking() {
    this.tableService.getParkingDetailsByUser(this.username).subscribe(value => {
      this.historyList = value;
    });
  }

  getStreet() {
    this.tableService.getStreet().subscribe(value => {
      this.historyList2 = value;
      console.log(value);
    });
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
