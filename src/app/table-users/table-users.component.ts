import {Component, OnInit} from '@angular/core';
import {Parking} from '../entities/Parking';
import {Router} from '@angular/router';
import {TableSearchComponentServices} from '../table-search/table-search.component.services';
import {TableUsersService} from './table-users.service';


@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {

  public historyList: Array<Parking> = new Array<Parking>();
  private username: string;


  constructor(private router: Router, private tableService: TableUsersService) {
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

  removeParking(parkingToDelete: Parking) {
    this.tableService.deleteParking(parkingToDelete).subscribe(response => {
        this.historyList = this.historyList.filter(parking => parking.address !== parkingToDelete.address);
      }, error1 => {
        alert('Error connection with the database');
      }
    );


  }
}
