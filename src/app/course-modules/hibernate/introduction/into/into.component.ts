import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-into',
  templateUrl: './into.component.html',
  styleUrls: ['./into.component.scss']
})
export class IntoComponent implements OnInit {

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

  
