import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountryStats} from '../_models/country-stats';
import {environment} from '../../environments/environment';
import {ChartStats} from '../_models/chart-stats';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http: HttpClient) { }

  getChartDataByCountryInTimeRange(country: string, caseStatus: string, startDate: string, endDate: string): Observable<ChartStats> {
    return this.http.get<ChartStats>(`${environment.apiUrl}/chart/` + country + '/' + caseStatus + '?from='  + startDate + '&to=' + endDate);
  }

  getGlobalChartDataInAllTime(caseStatus: string): Observable<ChartStats> {
    return this.http.get<ChartStats>(`${environment.apiUrl}/chart/global/all/` + caseStatus);
  }

}
