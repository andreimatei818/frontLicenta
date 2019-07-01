import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  public query: string;

  public constructor() {
    this.query = "starbucks";
  }

  public ngOnInit() { }

}
