import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  elementId: string;

  constructor() {
    this.elementId = "one";

  }
 mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
  }
 


  ngOnInit(): void {
  }
}
