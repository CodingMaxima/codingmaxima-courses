import { Component } from '@angular/core';

@Component({
  selector: 'app-employe-inheritance',
  templateUrl: './employe-inheritance.component.html',
  styleUrls: ['./employe-inheritance.component.scss']
})
export class EmployeInheritanceComponent {

  elementId: string;
  constructor() { this.elementId = "one"; }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
