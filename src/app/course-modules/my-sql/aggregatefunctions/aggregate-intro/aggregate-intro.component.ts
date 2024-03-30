import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggregate-intro',
  templateUrl: './aggregate-intro.component.html',
  styleUrls: ['./aggregate-intro.component.scss']
})
export class AggregateIntroComponent implements OnInit {


  elementId: string;
  constructor() { this.elementId = "one"; }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {

  }
}
