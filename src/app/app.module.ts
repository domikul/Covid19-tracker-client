import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {GoogleMapsModule} from '@angular/google-maps';
import {MapComponent} from './map/map.component';
import {CountryInterpreter} from './_helpers/country-interpreter';
import { MapStatsComponent } from './map/map-stats/map-stats.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import {RouterModule} from '@angular/router';
import { SourceComponent } from './source/source.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MAT_DATE_LOCALE, MatNativeDateModule, MatPseudoCheckboxModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {HttpErrorInterceptor} from './_helpers/error-interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';

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
      {path: '', component: MapComponent},
      {path: 'table', component: TableComponent},
      {path: 'chart', component: ChartComponent},
      {path: 'source', component: SourceComponent}
    ]),
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSnackBarModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    MatPaginatorModule,
    MatSlideToggleModule
  ],
  providers: [CountryInterpreter,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
