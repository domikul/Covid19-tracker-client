import {Component, OnInit} from '@angular/core';
import {CountryStats} from '../_models/country-stats';
import {CovidCasesService} from '../_services/covid-cases.service';
import {MatTableDataSource} from '@angular/material/table';
import {CountryInterpreter} from '../_helpers/country-interpreter';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  tab = [];
  mapWithNames = this.countryInterpreter.countryNamesMapEnPl;
  dataTable: MatTableDataSource<CountryStats> = new MatTableDataSource<CountryStats>([]);
  displayedColumns: string[] = ['country', 'confirmedCases', 'deathCases', 'recoveredCases'];
  dataSource = this.dataTable;
  date: Date = new Date(Date.now());
  yesterday = this.date.setDate(this.date.getDate() - 1 );
  startDateForm: string;
  endDateForm: string;

  constructor(private covidCasesService: CovidCasesService, private countryInterpreter: CountryInterpreter) { }

  ngOnInit(): void {
    this.covidCasesService.getTotalWorldCases().subscribe(x => {
      for (const val of x){
        val.countryPl = this.mapWithNames.get(val.country);
        this.tab.push(val);
      }
      this.tab.sort((a, b) => (a.countryPl > b.countryPl) ? 1 : ((b.countryPl > a.countryPl) ? -1 : 0));
      this.dataTable.data = this.tab;
    });

    this.startDateForm = new DatePipe('en-US').transform('2020-01-22', 'yyyy-MM-dd');
    this.endDateForm = new DatePipe('en-US').transform(this.yesterday, 'yyyy-MM-dd');
  }

  calculate(): void{
    this.tab.length = 0;
    this.covidCasesService.getTotalWorldCasesInTimeRange(this.startDateForm, this.endDateForm).subscribe(x => {
      for (const val of x){
        val.countryPl = this.mapWithNames.get(val.country);
        this.tab.push(val);
      }
      this.tab.sort((a, b) => (a.countryPl > b.countryPl) ? 1 : ((b.countryPl > a.countryPl) ? -1 : 0));
      this.dataTable.data = this.tab;
    });
  }
}

