import { Injectable } from '@angular/core';
// import * as contentFields from '../assets/about.json';
declare var require: any
const contentFields = require('../assets/about.json');

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
      getContentFields() {
      	
        return contentFields["description"]
    }


}
