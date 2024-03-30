import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {

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
