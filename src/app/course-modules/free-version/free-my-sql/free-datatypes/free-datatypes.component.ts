import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-datatypes',
  templateUrl: './free-datatypes.component.html',
  styleUrls: ['./free-datatypes.component.scss']
})
export class FreeDatatypesComponent implements OnInit {

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
