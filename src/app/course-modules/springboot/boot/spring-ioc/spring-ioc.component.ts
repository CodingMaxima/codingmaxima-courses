import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-ioc',
  templateUrl: './spring-ioc.component.html',
  styleUrls: ['./spring-ioc.component.scss']
})
export class SpringIocComponent implements OnInit{
  elementId: string;
  constructor() {
    this.elementId = "one";
  }


  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}