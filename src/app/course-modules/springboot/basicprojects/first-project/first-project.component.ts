import { Component } from '@angular/core';

@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['./first-project.component.scss']
})
export class FirstProjectComponent {

  elementId: string;
  elementId2:string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "model"
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.elementId2 = "model"
  }

  tabChange2(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
}
