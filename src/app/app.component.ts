import { Component ,ViewChild} from '@angular/core';
// import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Http, Response } from '@angular/http';
import { ContentService } from "./content.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
   
  
  public records: any[] = [];  
  public batting_score: any;  
  public wickets: any;  
  public runs_conceded: any;  
  public catches: any;  
  public stumps: any;  
  public opposition: any;
  public ground: any;   
  public date: any;   
  public match_result: any;   
  public result_margin: any;   
  public toss: any;   
  public batting_innings: any;     
 

  public csvData: any[] = [];

 public content:any[]=[];
 // The Content is basically used to bring the  HTML content  to be shown from common json file here we can have objects 
 // of descriptions ...one of the example is shown here .content.json is bringing the content from a json file and data binding
 // has been done.This can be used for all the content in the same manner
   constructor (private contentService: ContentService ,private http: Http) {
     this.content = this.contentService.getContentFields()
    this.readCsvData()
    console.log(this.content)
  }

  readCsvData () {

    this.http.get('./assets/sachin.csv')
    .subscribe(

      data => this.extractData(data),
      err => this.handleError(err)
    );
   

  }

  private extractData(res: Response) {

    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];

    for ( let i = 1; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            let tarr = [];
            for ( let j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }

    this.csvData = lines;


}

  private handleError (error: any) {
  
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }
}   


