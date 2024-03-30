import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-intro',
  templateUrl: './function-intro.component.html',
  styleUrls: ['./function-intro.component.scss']
})
export class FunctionIntroComponent implements OnInit {

  elementId: string;
  elementId2: string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "example";
  }
 mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  tabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
