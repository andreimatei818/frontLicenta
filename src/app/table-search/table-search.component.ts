import {Component, Inject, OnInit} from '@angular/core';
import {Parking} from '../entities/Parking';
import {Router} from '@angular/router';
import {TableSearchComponentServices} from './table-search.component.services';
import {ModalComponent} from "../modal/modal.component";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css']
})
export class TableSearchComponent implements OnInit {

  private historyList: Array<Parking> = new Array<Parking>();
  private username: string;

  constructor(private router: Router, private tableService: TableSearchComponentServices, public dialog: MatDialog) {
  }

  ngOnInit() {
    if (localStorage.getItem('username') == null) {
      this.router.navigate(['/login']);
    }
    this.username = localStorage.getItem('username');
    this.getParking();
  }

  getParking() {
    this.tableService.getParkingDetailsByUser(this.username).subscribe(value => {
      this.historyList = value;
    });
  }

  goToReserve(row: Parking) {
      console.log(row);
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(ModalComponent, {
      autoFocus:true,
      data: {parking: row }
    });

    dialogRef.afterClosed().subscribe(result => {
          console.log("bla");
    });
  }
}
