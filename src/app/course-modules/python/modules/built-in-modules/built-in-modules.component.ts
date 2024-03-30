import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-modules',
  templateUrl: './built-in-modules.component.html',
  styleUrls: ['./built-in-modules.component.scss']
})
export class BuiltInModulesComponent {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
