import { Component } from '@angular/core';

@Component({
  selector: 'app-car-class',
  templateUrl: './car-class.component.html',
  styleUrls: ['./car-class.component.scss']
})
export class CarClassComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
