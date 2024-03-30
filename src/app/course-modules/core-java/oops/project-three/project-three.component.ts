import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-three',
  templateUrl: './project-three.component.html',
  styleUrls: ['./project-three.component.scss']
})
export class ProjectThreeComponent implements OnInit {

  elementId: string;
  constructor() { this.elementId = "one"; }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
