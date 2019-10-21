import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bar-line',
  templateUrl: './bar-line.component.html',
  styleUrls: ['./bar-line.component.css']
})
export class BarLineComponent implements OnInit {
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
        labelString: 'Total Batting Score'
      }
    }]
       
},
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [ ];
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
 var barData:any=[];
 var lineData:any=[];
 let firstInningsrecordMap = new Map();
 let secondInningsrecordMap = new Map();  
 
 this.records.forEach(function(value){
   var dates=(new Date(value[date]).getFullYear())
   var innings=value[battingInnings];
  if(innings=="1st"){
     var score:any= getScore(value[battingScore])
     secondInningsrecordMap.set(dates,secondInningsrecordMap.has(dates)?(secondInningsrecordMap.get(dates)+0):0);
     firstInningsrecordMap.set(dates,firstInningsrecordMap.has(dates)?(firstInningsrecordMap.get(dates)+score):0+(score));
}
  else{
     var score:any= getScore(value[battingScore])
     secondInningsrecordMap.set(dates,secondInningsrecordMap.has(dates)?(secondInningsrecordMap.get(dates)+score):0+(score));
     firstInningsrecordMap.set(dates,firstInningsrecordMap.has(dates)?(firstInningsrecordMap.get(dates)):0);
}

  })


firstInningsrecordMap.forEach((value: number, key: number) => {
     barData.push(value);  
});

secondInningsrecordMap.forEach((value: number, key: number) => {
  lineData.push(value); 
     labelData.push(key);
});

  this.barChartLabels=labelData

  this.barChartData = [
          { data:lineData, label: 'Second Innings', type: 'line' },
             { data:barData, label: 'First Innings', stack:'a' },
        ];

  }
  
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
