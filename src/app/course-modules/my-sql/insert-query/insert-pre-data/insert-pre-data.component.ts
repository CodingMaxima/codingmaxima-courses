import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-pre-data',
  templateUrl: './insert-pre-data.component.html',
  styleUrls: ['./insert-pre-data.component.scss']
})
export class InsertPreDataComponent implements OnInit {
  elementId: string;

  constructor() {  
   
    this.elementId = "employee";
     
}

  ngOnInit(): void {
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
}
