import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filehandling-intro',
  templateUrl: './filehandling-intro.component.html',
  styleUrls: ['./filehandling-intro.component.scss']
})
export class FilehandlingIntroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
