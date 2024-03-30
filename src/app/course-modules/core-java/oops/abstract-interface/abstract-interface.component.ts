import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract-interface',
  templateUrl: './abstract-interface.component.html',
  styleUrls: ['./abstract-interface.component.scss']
})
export class AbstractInterfaceComponent implements OnInit {

  elementId: string;
  constructor() { this.elementId = "one"; }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
