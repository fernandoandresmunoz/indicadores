import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatListModule } from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar';
import { IndicadoresListComponent } from './indicadores-list/indicadores-list.component';
import { IndicadorDetailComponent } from './indicador-detail/indicador-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicadoresListComponent,
    IndicadorDetailComponent,
    ChartDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
