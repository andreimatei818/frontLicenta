import {Component, ElementRef, Injectable, Input, OnInit, ViewChild} from '@angular/core';

declare var H: any;
@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {
  private ui: any;
  private search: any;

  @ViewChild('map')
  public mapElement: ElementRef;

  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  private platform: any;
  private map: any;

  public constructor() {
  }

  public ngOnInit() {
    this.platform = new H.service.Platform({
      app_id: '0dNbIEXdo0XceyL4mbY7',
      app_code: '_ketCycjQ-mEtVlMO_OGTw'
    });

    this.search = new H.places.Search(this.platform.getPlacesService());
  }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngAfterViewInit() {
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: this.lat, lng: this.lng }
      }
    );
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
  }
  public places(query: string) {
    this.map.removeObjects(this.map.getObjects());
    this.search.request({ q: query, at: this.lat + ',' + this.lng }, {}, data => {
      for (let i = 0; i < data.results.items.length; i++) {
        this.dropMarker({ lat: data.results.items[i].position[0], lng: data.results.items[i].position[1] }, data.results.items[i]);
      }
    }, error => {
      console.error(error);
    });
  }

  private dropMarker(coordinates: any, data: any) {
    const marker = new H.map.Marker(coordinates);
    marker.setData('<p>' + data.title + '<br>' + data.vicinity + '</p>');
    marker.addEventListener('tap', event => {
      const bubble =  new H.ui.InfoBubble(event.target.getPosition(), {
        content: event.target.getData()
      });
      this.ui.addBubble(bubble);
    }, false);
    this.map.addObject(marker);
  }



}
