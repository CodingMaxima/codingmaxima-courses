import { Component } from '@angular/core';

@Component({
  selector: 'app-thirdparty-modules',
  templateUrl: './thirdparty-modules.component.html',
  styleUrls: ['./thirdparty-modules.component.scss']
})
export class ThirdpartyModulesComponent {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
