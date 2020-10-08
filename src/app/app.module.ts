import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexModule} from '@angular/flex-layout';
import { MapComponent } from './map/map.component';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexModule,
    GoogleMapsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDBeQ3lqsWsXzqiHN3zuFu9vnVsJOvzO1U'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
