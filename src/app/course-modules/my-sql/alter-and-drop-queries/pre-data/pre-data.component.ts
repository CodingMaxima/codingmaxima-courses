import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-data',
  templateUrl: './pre-data.component.html',
  styleUrls: ['./pre-data.component.scss']
})
export class PreDataComponent implements OnInit {

  elementId: string;

  constructor() {  
    this.elementId = "student"; 
    this.elementId = "employee";
     
}

  ngOnInit(): void {
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

}
