import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-file',
  templateUrl: './read-file.component.html',
  styleUrls: ['./read-file.component.scss']
})
export class ReadFileComponent implements OnInit {

  elementId: string;
  constructor() { this.elementId = "approach1"; }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }


}
