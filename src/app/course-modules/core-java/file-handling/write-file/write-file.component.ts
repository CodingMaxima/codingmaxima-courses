import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-file',
  templateUrl: './write-file.component.html',
  styleUrls: ['./write-file.component.scss']
})
export class WriteFileComponent implements OnInit {

  elementId: string;
  constructor() { this.elementId = "approach1"; }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }


}
