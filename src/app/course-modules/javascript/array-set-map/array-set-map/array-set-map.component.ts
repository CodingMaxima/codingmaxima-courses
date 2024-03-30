import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-set-map',
  templateUrl: './array-set-map.component.html',
  styleUrls: ['./array-set-map.component.scss']
})
export class ArraySetMapComponent implements OnInit {

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
