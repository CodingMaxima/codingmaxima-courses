import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alter-and-drop-intro',
  templateUrl: './alter-and-drop-intro.component.html',
  styleUrls: ['./alter-and-drop-intro.component.scss']
})
export class AlterAndDropIntroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
