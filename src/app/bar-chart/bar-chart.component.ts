import { Component, OnInit ,Input} from '@angular/core';
import { distinct,groupBy, mergeMap, toArray } from 'rxjs/operators';
import { of ,from} from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
@Input()records: any[];  

  constructor() { }
public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,

  barValueSpacing: 20,
     scales: {
        xAxes: [{
            barPercentage:5,
            barThickness:30,
            maxBarThickness:30,  
               scaleLabel: {
        display: true,
        labelString: 'Years'
      }          
        }],
        yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Total Batting Score'
      }
    }]
       
}
  };

  public barChartLabels =[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [

  ];

  ngOnInit() {
  var battingScore=0;
  var wickets=1;
  var runsConceded=2;
  var catches=3;
  var stumps=4;
  var opposition=5;
  var ground=6;
  var date=7;
  var matchResult=8;
  var resultMargin=9;
  var toss=10;
  var battingInnings=11;

function  getScore(score:any){
   
 if(score==="DNB")

     return 0;
 else  if(score==="TDNB")
     return 0;
else if (score.charAt(score.length - 1) == '*') {
 
      return parseInt(score.substring(0,score.length-1), 10);
 }
else{
      return parseInt(score,10);
}
}



 var labelData=[];
 var bar1Data:any=[];
 let recordMap = new Map(); 
 
 this.records.forEach(function(value){

     var dates=(new Date(value[date]).getFullYear())
     var score:any= getScore(value[battingScore])
 
     recordMap.set(dates,recordMap.has(dates)?(recordMap.get(dates)+score):0+(score));
  })


recordMap.forEach((value: number, key: number) => {
     bar1Data.push(value); 
     labelData.push(key);
   
});

  this.barChartLabels=labelData

  this.barChartData = [
          { data:bar1Data, label: 'runs' },
        ];

  }

}
