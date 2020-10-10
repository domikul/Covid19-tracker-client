import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  zoom = 4;
  center: google.maps.LatLngLiteral;
  markerLat: number;
  markerLng: number;
  markers: Array<any> = new Array<any>();

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  onChoseLocation(event: google.maps.MouseEvent): void {
    console.log(event.latLng.toString());
    this.markers.push({
      position: event.latLng
    });
  }



}
