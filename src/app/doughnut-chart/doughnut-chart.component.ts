import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

@Input()records: any[];  

public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
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

let scoreMap = new Map(); 
var labelData=[];
var chartData:any=[];

   this.records.forEach(function(value){
         var country=value[opposition].substring(1,value[opposition].length-1)
         var score:any= getScore(value[battingScore])
 
         scoreMap.set(country,scoreMap.has(country)?(scoreMap.get(country)+score):0+(score));
          })

         scoreMap.forEach((value: number, key: number) => {
         chartData.push(value); 
         labelData.push(key);
   
});

  this.doughnutChartLabels=labelData

  this.doughnutChartData = chartData



  }

}
