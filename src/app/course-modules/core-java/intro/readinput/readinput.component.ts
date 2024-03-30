import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readinput',
  templateUrl: './readinput.component.html',
  styleUrls: ['./readinput.component.scss']
})
export class ReadinputComponent implements OnInit {

  elementId:string;
  
  constructor() { 
    this.elementId = "one";
    
  }
  ngOnInit(): void {
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  
}
