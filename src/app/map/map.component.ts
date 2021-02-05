import {Component, Input, OnInit, Output} from '@angular/core';
import {CountryStats} from '../_models/country-stats';
import {CovidCasesService} from '../_services/covid-cases.service';
import {CountryInterpreter} from '../_helpers/country-interpreter';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  zoom = 4;
  center: google.maps.LatLngLiteral;
  geocoder = new google.maps.Geocoder();
  markers: Array<any> = new Array<any>();

  countryNamePl: string;
  countryStats = new CountryStats();
  mapWithNames = this.countryInterpreter.countryNamesMapPlEn;
  statsToSend = new Subject<CountryStats>();


  constructor(private covidCasesService: CovidCasesService, private countryInterpreter: CountryInterpreter) {   }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  onChoseLocation(event: google.maps.MouseEvent): void {
    this.markers.length = 0;
    const latlng = event.latLng;
    this.markers.push({
      position: latlng
    });
    this.geocoder.geocode(
      { location: latlng },
      (
        results: google.maps.GeocoderResult[],
        status: google.maps.GeocoderStatus
      ) => {
        if (status === 'OK') {
          if (results[0]) {
            const geocodedAdress = results[0].formatted_address.toString();
            let isKey = false;
            for (const key of this.mapWithNames.keys()){
              if (geocodedAdress.includes(key)){
                isKey = true;
                this.countryNamePl = key;
                break;
              }
            }
            if (isKey === false){
              window.alert('Brak danych dla tego obszaru');
            }
            this.covidCasesService.getLatestDataByCountry(this.mapWithNames.get(this.countryNamePl)).subscribe(x => {
              this.countryStats = x;
              this.countryStats.countryPl = this.countryNamePl;
              this.statsToSend.next(this.countryStats);
            });
          } else {
            window.alert('Brak danych dla tego obszaru');
          }
        } else {
          window.alert('Brak danych dla tego obszaru');
        }
      }
    );
  }
}
