import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CountryStats} from '../../_models/country-stats';
import {Observable, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-map-stats',
  templateUrl: './map-stats.component.html',
  styleUrls: ['./map-stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapStatsComponent implements OnInit {

  @Input() receivedStats: Subject<CountryStats>;
  countryStat: CountryStats;

  constructor(private changeDetector: ChangeDetectorRef) {
    setInterval(() => this.changeDetector.markForCheck(), 500);
  }

  ngOnInit(): void {
    this.receivedStats.subscribe(data => {
      this.countryStat = data;
    });
  }
}
