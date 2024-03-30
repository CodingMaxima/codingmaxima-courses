import { Component } from '@angular/core';

@Component({
  selector: 'app-numpy-intro',
  templateUrl: './numpy-intro.component.html',
  styleUrls: ['./numpy-intro.component.scss']
})
export class NumpyIntroComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }
}
