import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dunder-intro',
  templateUrl: './dunder-intro.component.html',
  styleUrls: ['./dunder-intro.component.scss']
})
export class DunderIntroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
