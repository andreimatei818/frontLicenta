import {Component, OnInit} from '@angular/core';
import {Parking} from '../entities/Parking';
import {Router} from '@angular/router';
import {TableSearchComponentServices} from '../table-search/table-search.component.services';
import {TableReservedService} from './table-reserved.service';


@Component({
  selector: 'app-table-reserved',
  templateUrl: './table-reserved.component.html',
  styleUrls: ['./table-reserved.component.css']
})
export class TableReservedComponent implements OnInit {

  public historyList: Array<Parking> = new Array<Parking>();
  private username: string;


  constructor(private router: Router, private tableService: TableReservedService) {
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

  removeParking(address: string) {
    this.tableService.deleteParking(address).subscribe(response => {
        this.historyList = this.historyList.filter(parking => parking.address !==  address);
      }, error1 => {
        alert('Error connection with the database');
      }
    );


  }
}
