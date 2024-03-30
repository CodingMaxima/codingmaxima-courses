import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

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


