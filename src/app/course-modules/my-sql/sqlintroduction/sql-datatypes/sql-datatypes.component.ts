import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql-datatypes',
  templateUrl: './sql-datatypes.component.html',
  styleUrls: ['./sql-datatypes.component.scss']
})
export class SqlDatatypesComponent implements OnInit {

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
