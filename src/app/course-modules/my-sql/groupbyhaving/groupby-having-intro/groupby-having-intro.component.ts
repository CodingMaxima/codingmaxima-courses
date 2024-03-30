import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupby-having-intro',
  templateUrl: './groupby-having-intro.component.html',
  styleUrls: ['./groupby-having-intro.component.scss']
})
export class GroupbyHavingIntroComponent implements OnInit {

 
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
