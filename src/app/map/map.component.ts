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
  geocoder = new google.maps.Geocoder();
  markers: Array<any> = new Array<any>();

  constructor() {   }

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
    const latlng = event.latLng;
    this.geocoder.geocode(
      { location: latlng },
      (
        results: google.maps.GeocoderResult[],
        status: google.maps.GeocoderStatus
      ) => {
        if (status === 'OK') {
          if (results[0]) {
            console.log(results[0].formatted_address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );


  }



}
