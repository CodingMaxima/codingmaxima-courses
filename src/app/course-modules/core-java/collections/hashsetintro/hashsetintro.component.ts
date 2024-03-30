import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashsetintro',
  templateUrl: './hashsetintro.component.html',
  styleUrls: ['./hashsetintro.component.scss']
})
export class HashsetintroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
