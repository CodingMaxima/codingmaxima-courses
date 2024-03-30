import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.scss']
})
export class ProjectOneComponent implements OnInit {

  elementId: string;
  constructor() { this.elementId = "one"; }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
