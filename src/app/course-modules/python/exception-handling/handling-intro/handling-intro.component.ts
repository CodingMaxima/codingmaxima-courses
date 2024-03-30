import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handling-intro',
  templateUrl: './handling-intro.component.html',
  styleUrls: ['./handling-intro.component.scss']
})
export class HandlingIntroComponent implements OnInit {

  elementId:string;
  elementId2: string;
  constructor() { 
    this.elementId = "one";
    this.elementId2 = "example1"
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }
  subTabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  ngOnInit(): void {
  }

}
