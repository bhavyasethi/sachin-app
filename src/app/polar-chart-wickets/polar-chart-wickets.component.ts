import { Component, OnInit ,Input} from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-chart-wickets',
  templateUrl: './polar-chart-wickets.component.html',
  styleUrls: ['./polar-chart-wickets.component.css']
})
export class PolarChartWicketsComponent implements OnInit {

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
  let wicketMap = new Map(); 
  var labelData=[];
  var chartData:any=[];

 this.records.forEach(function(value){
      var wicket=value[wickets];
      if(wicket != "-" && wicket !="0"){
  	      wicketMap.set(wicket,wicketMap.has(wicket)?(wicketMap.get(wicket)+1):1);
        }
   })

wicketMap.forEach((value: number, key: number) => {
     chartData.push(value); 
     labelData.push(key);
   
});

  this.polarAreaChartLabels=labelData
  this.polarAreaChartData = chartData


  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }



}
