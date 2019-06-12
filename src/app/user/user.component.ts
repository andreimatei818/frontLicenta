import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Parking} from '../entities/Parking';
import {UserService} from './user.component.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public historyList: Array<Parking> = new Array<Parking>();
  private username: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    if (localStorage.getItem('username') == null) {
      this.router.navigate(['/login']);
    }
    this.username = localStorage.getItem('username');
    this.getParking();
  }

  getParking() {
    this.userService.getParkingDetailsByUser(this.username).subscribe(value => {
      this.historyList = value;
    });
  }
}

