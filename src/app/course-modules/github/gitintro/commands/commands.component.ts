import { Component } from '@angular/core';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent {

  elementId: string;
  constructor() {
    this.elementId = "one";
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
}
