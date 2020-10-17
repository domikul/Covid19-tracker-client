import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexModule} from '@angular/flex-layout';
import {GoogleMapsModule} from '@angular/google-maps';
import {MapComponent} from './map/map.component';
import {CountryInterpreter} from './_helpers/country-interpreter';
import { MapStatsComponent } from './map/map-stats/map-stats.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';

import {RouterModule} from '@angular/router';
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapStatsComponent,
    TableComponent,
    ChartComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexModule,
    GoogleMapsModule,
    RouterModule.forRoot([
      { path: '', component: MapComponent},
      { path: 'table', component: TableComponent},
      { path: 'chart', component: ChartComponent},
      { path: 'source', component: SourceComponent}
    ])
  ],
  providers: [CountryInterpreter],
  bootstrap: [AppComponent]
})
export class AppModule { }
