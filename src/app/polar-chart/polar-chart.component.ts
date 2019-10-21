import { Component, OnInit ,Input} from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent implements OnInit {
@Input()records: any[];  
  public polarAreaChartLabels: Label[] = [];
  public polarAreaChartData: SingleDataSet = [];
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';

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
   	var grounds=value[ground];
    var score:any= getScore(value[battingScore])
 
   scoreMap.set(grounds,scoreMap.has(grounds)?(scoreMap.get(grounds)+score):0+(score));
   })

   scoreMap.forEach((value: number, key: string) => {
     chartData.push(value);  
        });
chartData.sort((a,b)=>b-a);
var sortedData:any=[];
    for(var i = 0;i<5;i++) { 
            sortedData.push(chartData[i]);
            scoreMap.forEach((value: number, key: string) => {
                if(value==chartData[i]){
                      labelData.push(key)
                     }
                 });

}


  this.polarAreaChartLabels=labelData
  this.polarAreaChartData = sortedData


  }


  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }




}
