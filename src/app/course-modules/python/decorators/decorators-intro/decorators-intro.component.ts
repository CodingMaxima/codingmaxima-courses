import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorators-intro',
  templateUrl: './decorators-intro.component.html',
  styleUrls: ['./decorators-intro.component.scss']
})
export class DecoratorsIntroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
