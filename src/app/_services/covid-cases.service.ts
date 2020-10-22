import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryStats} from '../_models/country-stats';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidCasesService {

  constructor(private http: HttpClient) { }

  getLatestDataByCountry(country: string): Observable<CountryStats> {
    return this.http.get<CountryStats>(`${environment.apiUrl}/total/` + country);
  }

  getTotalWorldCases(): Observable<CountryStats[]> {
    return this.http.get<CountryStats[]>(`${environment.apiUrl}/total/world`);
  }

  getTotalWorldCasesInTimeRange(startDate: string, endDate: string): Observable<CountryStats[]> {
    return this.http.get<CountryStats[]>(`${environment.apiUrl}/partial/world?from=` + startDate + '&to=' + endDate);
  }

}
