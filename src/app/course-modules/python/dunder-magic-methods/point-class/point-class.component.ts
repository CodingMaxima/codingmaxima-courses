import { Component } from '@angular/core';

@Component({
  selector: 'app-point-class',
  templateUrl: './point-class.component.html',
  styleUrls: ['./point-class.component.scss']
})
export class PointClassComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
