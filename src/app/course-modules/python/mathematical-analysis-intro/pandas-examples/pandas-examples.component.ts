import { Component } from '@angular/core';

@Component({
  selector: 'app-pandas-examples',
  templateUrl: './pandas-examples.component.html',
  styleUrls: ['./pandas-examples.component.scss']
})
export class PandasExamplesComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }
}
