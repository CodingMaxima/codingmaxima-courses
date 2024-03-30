import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postman',
  templateUrl: './postman.component.html',
  styleUrls: ['./postman.component.scss']
})
export class PostmanComponent implements OnInit {

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
