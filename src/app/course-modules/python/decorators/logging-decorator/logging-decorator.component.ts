import { Component } from '@angular/core';

@Component({
  selector: 'app-logging-decorator',
  templateUrl: './logging-decorator.component.html',
  styleUrls: ['./logging-decorator.component.scss']
})
export class LoggingDecoratorComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
} 
