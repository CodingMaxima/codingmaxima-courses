import { Component } from '@angular/core';

@Component({
  selector: 'app-numpy-examples',
  templateUrl: './numpy-examples.component.html',
  styleUrls: ['./numpy-examples.component.scss']
})
export class NumpyExamplesComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }
}
