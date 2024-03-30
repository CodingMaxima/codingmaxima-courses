import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-intro',
  templateUrl: './lists-intro.component.html',
  styleUrls: ['./lists-intro.component.scss']
})
export class ListsIntroComponent implements OnInit {

  elementId: string;
  elementId2: string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "introduction";
  }
  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
    this.elementId2 = "introduction";
  }
  tabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
