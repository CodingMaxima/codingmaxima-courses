import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-args-kwargs-intro',
  templateUrl: './args-kwargs-intro.component.html',
  styleUrls: ['./args-kwargs-intro.component.scss']
})
export class ArgsKwargsIntroComponent implements OnInit {

  elementId: string;
  elementId2: string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "example1"
  }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  subTabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  ngOnInit(): void {
  }
}
