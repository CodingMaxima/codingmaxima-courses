import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debugingcode-intro',
  templateUrl: './debugingcode-intro.component.html',
  styleUrls: ['./debugingcode-intro.component.scss']
})
export class DebugingcodeIntroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
