import { Component, OnInit ,Input} from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input()records: any[];  
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';


  constructor() { }

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

let centuryMap = new Map(); 
var labelData=[];
var chartData:any=[];

this.records.forEach(function(value){

   	var score=getScore(value[battingScore]);
       if(score >=50 && score<100){
	         centuryMap.set(50,centuryMap.has(50)?(centuryMap.get(50)+1):1);
	          }
       else if(score >=100){
	          centuryMap.set(100,centuryMap.has(100)?(centuryMap.get(100)+1):1);
             }
     })

centuryMap.forEach((value: number, key: number) => {
     chartData.push(value); 
     labelData.push(key);
   
});

  this.pieChartLabels=labelData
  this.pieChartData = chartData


  }


  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
