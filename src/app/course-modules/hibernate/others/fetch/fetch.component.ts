import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.scss']
})
export class FetchComponent implements OnInit {

  elementId:string;
  elementId2:string;
  constructor() { 
    this.elementId = "one";
    this.elementId2 = "lazy"
   }

 
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  subtabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
  
}

  
  


