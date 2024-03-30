import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-beans-and-components',
  templateUrl: './spring-beans-and-components.component.html',
  styleUrls: ['./spring-beans-and-components.component.scss']
})
export class SpringBeansAndComponentsComponent implements OnInit{
  elementId: string;
  constructor() {
    this.elementId = "three";
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
