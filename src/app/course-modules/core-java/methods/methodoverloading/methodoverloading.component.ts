import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methodoverloading',
  templateUrl: './methodoverloading.component.html',
  styleUrls: ['./methodoverloading.component.scss']
})
export class MethodoverloadingComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
