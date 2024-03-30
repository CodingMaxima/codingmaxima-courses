import { Component } from '@angular/core';

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.scss']
})
export class InheritanceComponent {

  elementId: string;
  constructor() { this.elementId = "one"; }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
