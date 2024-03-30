import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-intro',
  templateUrl: './modules-intro.component.html',
  styleUrls: ['./modules-intro.component.scss']
})
export class ModulesIntroComponent implements OnInit {

 
	elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
