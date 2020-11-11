import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CountryStats} from '../../_models/country-stats';
import {Observable, Subject, Subscription} from 'rxjs';
import {CovidCasesService} from '../../_services/covid-cases.service';

@Component({
  selector: 'app-map-stats',
  templateUrl: './map-stats.component.html',
  styleUrls: ['./map-stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapStatsComponent implements OnInit {

  @Input() receivedStats: Subject<CountryStats>;
  countryStat: CountryStats;

  constructor(private changeDetector: ChangeDetectorRef, private covidCasesService: CovidCasesService) {
    setInterval(() => this.changeDetector.markForCheck(), 500);
  }

  ngOnInit(): void {
    this.receivedStats.subscribe(data => {
      this.countryStat = data;
    });

    this.covidCasesService.getTotalGlobalCases().subscribe( data => {
      this.countryStat = data;
    });
  }
}
