import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-statments',
  templateUrl: './control-statments.component.html',
  styleUrls: ['./control-statments.component.scss']
})
export class ControlStatmentsComponent implements OnInit {

  elementId: string;
  elementId2: string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "ifstatement";
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
