import { Component } from '@angular/core';

@Component({
  selector: 'app-webscraping-examples',
  templateUrl: './webscraping-examples.component.html',
  styleUrls: ['./webscraping-examples.component.scss']
})
export class WebscrapingExamplesComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }
}
