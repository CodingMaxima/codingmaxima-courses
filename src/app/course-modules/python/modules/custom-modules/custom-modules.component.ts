import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-modules',
  templateUrl: './custom-modules.component.html',
  styleUrls: ['./custom-modules.component.scss']
})
export class CustomModulesComponent {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
