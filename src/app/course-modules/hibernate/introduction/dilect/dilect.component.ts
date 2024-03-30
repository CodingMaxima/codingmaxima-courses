import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dilect',
  templateUrl: './dilect.component.html',
  styleUrls: ['./dilect.component.scss']
})
export class DilectComponent implements OnInit {

  elementId:string;
  constructor() { 
    this.elementId = "one";
   }

  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

 
}
