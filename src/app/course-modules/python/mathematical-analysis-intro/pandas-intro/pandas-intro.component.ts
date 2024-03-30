import { Component } from '@angular/core';

@Component({
  selector: 'app-pandas-intro',
  templateUrl: './pandas-intro.component.html',
  styleUrls: ['./pandas-intro.component.scss']
})
export class PandasIntroComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }
}
