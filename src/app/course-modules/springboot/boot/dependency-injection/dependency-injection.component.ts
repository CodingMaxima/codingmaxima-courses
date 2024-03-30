import { Component } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent {
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
