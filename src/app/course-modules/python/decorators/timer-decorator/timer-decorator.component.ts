import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-decorator',
  templateUrl: './timer-decorator.component.html',
  styleUrls: ['./timer-decorator.component.scss']
})
export class TimerDecoratorComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
