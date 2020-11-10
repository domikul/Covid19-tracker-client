import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CountryInterpreter } from '../_helpers/country-interpreter';
import {ChartDataService} from '../_services/chart-data.service';
import {DatePipe} from '@angular/common';
import {ChartStats} from '../_models/chart-stats';
import {CheckboxList} from '../_models/checkbox-list';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart: Chart = [];
  mapWithCountryNamesPlEn = this.countryInterpreter.countryNamesMapPlEn;
  mapWithCountryNamesEnPl = this.countryInterpreter.countryNamesMapEnPl;
  confirmedToggle: boolean;
  deathsToggle: boolean;
  recoveredToggle: boolean;
  checkList: Array<CheckboxList> =  new Array<CheckboxList>();
  checkedList: any;
  date: Date = new Date(Date.now());
  yesterday = this.date.setDate(this.date.getDate() - 1 );
  startDateForm: string;
  endDateForm: string;
  selectedCountries: Array<string> =  new Array<string>();
  chartLabels: string[] = new Array<string>();
  chartData: Array<number> = new Array<number>();
  chartLabel: string;
  colorIndex = 0;

  constructor(private countryInterpreter: CountryInterpreter, private chartDataService: ChartDataService) {
  }

  ngOnInit(): void {
    for (const item of this.mapWithCountryNamesPlEn.keys()){
      const element = new CheckboxList(item, false);
      this.checkList.push(element);
    }
    this.checkList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    this.startDateForm = new DatePipe('en-US').transform('2020-01-22', 'yyyy-MM-dd');
    this.endDateForm = new DatePipe('en-US').transform(this.yesterday, 'yyyy-MM-dd');

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: this.chartLabel,
          data: this.chartData,
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

  onCheckboxChange(event, val: string): void {
    if (event.checked) {
        this.selectedCountries.push(val);
    } else {
      this.selectedCountries = this.selectedCountries.filter(m => m !== val);
    }
    console.log(this.selectedCountries);
  }


  onConfirmedToggleChange(event): void {
    this.confirmedToggle = !!event.checked;
  }

  onDeathsToggleChange(event): void {
    this.deathsToggle = !!event.checked;
  }

  onRecoveredToggleChange(event): void {
    this.recoveredToggle = !!event.checked;
  }

  generateChart(): void {
    this.deleteAllDatasets();
    let index = 0;
    for (let i = 0 ; i < (this.selectedCountries.length); i++){
      if (this.confirmedToggle){
        this.chartDataService.getChartDataByCountryInTimeRange(this.mapWithCountryNamesPlEn.get(this.selectedCountries[i]), 'confirmed', this.startDateForm, this.endDateForm). subscribe( x => {
          this.addDataToChart( this.getBackgroundColorForChart(this.colorIndex),  this.getBorderColorForChart(this.colorIndex), Object.keys(x.casesMap), Object.values(x.casesMap), this.mapWithCountryNamesEnPl.get(x.country) + ' - Zachorowania');
          this.colorIndex++;
        });
      }
      if (this.deathsToggle){
        this.chartDataService.getChartDataByCountryInTimeRange(this.mapWithCountryNamesPlEn.get(this.selectedCountries[i]), 'deaths', this.startDateForm, this.endDateForm). subscribe( x => {
          this.addDataToChart( this.getBackgroundColorForChart(this.colorIndex), this.getBorderColorForChart(this.colorIndex), Object.keys(x.casesMap), Object.values(x.casesMap), this.mapWithCountryNamesEnPl.get(x.country) + ' - Zgony');
          this.colorIndex++;
        });
      }
      if (this.recoveredToggle){
        this.chartDataService.getChartDataByCountryInTimeRange(this.mapWithCountryNamesPlEn.get(this.selectedCountries[i]), 'recovered', this.startDateForm, this.endDateForm). subscribe( x => {
          this.addDataToChart(this.getBackgroundColorForChart(this.colorIndex), this.getBorderColorForChart(this.colorIndex), Object.keys(x.casesMap), Object.values(x.casesMap), this.mapWithCountryNamesEnPl.get(x.country) + ' - Ozdrowienia');
          this.colorIndex++;
        });
      }
      console.log('i', index);
    }
    this.checkUncheckAll();
  }

  getCheckedItemList(): void {
    this.checkedList = [];
    for (let i = 0; i < this.checkList.length; i++) {
      if (this.checkList[i].selected){
        this.checkedList.push(this.checkList[i]);
      }
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

  checkUncheckAll(): void {
    for (let i = 0; i < this.checkList.length; i++) {
      this.checkList[i].selected = false;
    }
    this.getCheckedItemList();
    this.selectedCountries.length = 0;
    console.log(this.selectedCountries);
  }

  addDataToChart(backgrColor: string, borColor: string, axisLabels: string[], dataPoints: number[], labelName: string ): void {
    const newDataset = {backgroundColor : backgrColor, borderColor: borColor, data: dataPoints, borderWidth: 1, label: labelName, fill: false};
    this.chart.data.datasets.push(newDataset);
    this.chart.data.labels = axisLabels;
    this.chart.update();
  }

  deleteAllDatasets(): void{
    this.chart.data.datasets.forEach((dataset) => {
      this.chart.data.datasets.splice(dataset);
    });
    this.chart.update();
  }

  updateScaleLogarythmic(): void {
    this.chart.options.scales.yAxes[0] = {
      type: 'logarithmic'
    };
    this.chart.update();
  }

  updateScaleLinear(): void {
    this.chart.options.scales.yAxes[0] = {
      type: 'linear'
    };
    this.chart.update();
  }

  getBackgroundColorForChart(index: number): string{
  const backgroundColorList =  [
    'rgba(128, 0, 0, 0.2)',
    'rgba(70, 240, 240, 0.2)',
    'rgba(245, 130,48, 0.2)',
    'rgba(0, 128, 128, 0.2)',
    'rgba(255, 255, 25, 0.2)',
    'rgba(230, 25, 75, 0.2)',
    'rgba(145, 30, 180, 0.2)',
    'rgba(0, 0, 128, 0.2)',
    'rgba(255, 215, 180, 0.2)',
    'rgba(128, 128, 128, 0.2)',
    'rgba(0, 130, 200, 0.2)',
    'rgba(170, 110, 40, 0.2)',
    'rgba(220, 190, 255, 0.2)',
    'rgba(210, 245, 60, 0.2)',
    'rgba(170, 255, 195, 0.2)'
    ];

    if (this.colorIndex > 15){
      this.colorIndex = 0;
    }
  return backgroundColorList[index];
  }

  getBorderColorForChart(index: number): string{
  const borderColorList = [
      'rgba(128, 0, 0, 1)',
      'rgba(70, 240, 240, 1)',
      'rgba(245, 130,48, 1)',
      'rgba(0, 128, 128, 1)',
      'rgba(255, 255, 25, 1)',
      'rgba(230, 25, 75, 1)',
      'rgba(145, 30, 180, 1)',
      'rgba(0, 0, 128, 1)',
      'rgba(255, 215, 180, 1)',
      'rgba(128, 128, 128, 1)',
      'rgba(0, 130, 200, 1)',
      'rgba(170, 110, 40, 1)',
      'rgba(220, 190, 255, 1)',
      'rgba(210, 245, 60, 1)',
      'rgba(170, 255, 195, 1)'
    ];

    if (this.colorIndex > 15){
      this.colorIndex = 0;
    }

   return borderColorList[index];
  }
}
