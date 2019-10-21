
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import {MatInputModule} from '@angular/material/input';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { BarLineComponent } from './bar-line/bar-line.component';
import { HttpModule } from '@angular/http';
import { PolarChartWicketsComponent } from './polar-chart-wickets/polar-chart-wickets.component';
import { BarLineBowlerComponent } from './bar-line-bowler/bar-line-bowler.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DoughnutChartComponent,
    PolarChartComponent,
    BarLineComponent,
    PolarChartWicketsComponent,
    BarLineBowlerComponent,
    PieChartComponent,

  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpModule,
    MatCardModule ,
    MatInputModule,
    MatButtonModule,
    MatIconModule


  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule { }
