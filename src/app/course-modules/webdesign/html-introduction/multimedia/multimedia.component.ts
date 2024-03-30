import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.scss']
})
export class MultimediaComponent implements OnInit {
  elementId: string;


  constructor() {
    this.elementId = "one";


  }

  ngOnInit(): void {
  }
  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
  }

}
