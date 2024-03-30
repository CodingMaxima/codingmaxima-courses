import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oops-intro',
  templateUrl: './oops-intro.component.html',
  styleUrls: ['./oops-intro.component.scss']
})
export class OopsIntroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
