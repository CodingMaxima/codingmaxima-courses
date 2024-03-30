import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scraping-intro',
  templateUrl: './scraping-intro.component.html',
  styleUrls: ['./scraping-intro.component.scss']
})
export class ScrapingIntroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
