import {Component, OnInit} from '@angular/core';
import {DateTimeModel} from '../date-time-picker/date-time.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {

  private dt2: DateTimeModel;

  public selectedMoment = new Date();
  public selectedMoment2 = new FormControl(new Date());
  public selectedMoments = [new Date(2018, 1, 12, 10, 30), new Date(2018, 3, 21, 20, 30)];
  constructor() {
  }

  ngOnInit() {
    console.log(this.dt2);
  }

}
