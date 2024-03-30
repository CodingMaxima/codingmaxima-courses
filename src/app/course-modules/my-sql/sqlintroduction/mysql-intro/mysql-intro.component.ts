import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysql-intro',
  templateUrl: './mysql-intro.component.html',
  styleUrls: ['./mysql-intro.component.scss']
})
export class MysqlIntroComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }



}
