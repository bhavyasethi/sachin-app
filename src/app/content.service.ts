import { Injectable } from '@angular/core';
import * as contentFields from "../assets/about.json";
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
      getContentFields() {
      	
        return contentFields["description"]
    }


}
