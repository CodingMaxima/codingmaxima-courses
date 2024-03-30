import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {

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
