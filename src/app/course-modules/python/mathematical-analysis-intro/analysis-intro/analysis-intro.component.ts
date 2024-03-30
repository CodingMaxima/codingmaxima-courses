import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-intro',
  templateUrl: './analysis-intro.component.html',
  styleUrls: ['./analysis-intro.component.scss']
})
export class AnalysisIntroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
