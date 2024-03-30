import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.scss']
})
export class XmlComponent implements OnInit {

  elementId: string;
  exampleId:string;
  constructor() {
    this.elementId = "one";
    this.exampleId = "example-1"
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  exampleChange(event:Event){
    this.exampleId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }


}
