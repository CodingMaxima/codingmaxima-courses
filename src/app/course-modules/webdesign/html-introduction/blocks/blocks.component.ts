import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

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
