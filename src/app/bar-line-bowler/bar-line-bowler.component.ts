import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-bar-line-bowler',
  templateUrl: './bar-line-bowler.component.html',
  styleUrls: ['./bar-line-bowler.component.css']
})
export class BarLineBowlerComponent implements OnInit {

  @Input()records: any[];  
public barChartOptions = {
  scales: {
        xAxes: [{
        scaleLabel: {
        display: true,
        labelString: 'Years'
      }          
        }],
        yAxes: [{
        scaleLabel: {
        display: true,
        labelString: ''
      }
    }]
       
},
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    
    
  ];
  public barChartLabels: string[] = ['P', 'R', 'B'];
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

function  getRuns(score:any){
   
  
  return parseInt(score,10);

}


 var labelData=[];
 var barData:any=[];
 var lineData:any=[];
 let runsConcededMap = new Map();
 let wicketsMap = new Map();  
  this.records.forEach(function(value){
    var dates=((value[date]))
    var runsConc=value[runsConceded];
    var wicket=value[wickets];
      if(runsConc != "-")
      {
	       var run=getRuns(value[runsConceded])
        runsConcededMap.set(dates,run);
       }
      if(wicket !="-")
      {
	       var wick=getRuns(value[wickets])
         wicketsMap.set(dates,wick);
       }
   })


runsConcededMap.forEach((value: number, key: number) => {
     barData.push(value);   
});
wicketsMap.forEach((value: number, key: number) => {
     lineData.push(value); 
     labelData.push(key);  
});

  this.barChartLabels=labelData

  this.barChartData = [
          { data:lineData, label: 'wickets', type: 'line' },
             { data:barData, label: 'Runs Conceded', stack:'a' },
        ];
  }
  
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
