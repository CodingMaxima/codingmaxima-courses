import { Component } from '@angular/core';

@Component({
  selector: 'app-file-read-append',
  templateUrl: './file-read-append.component.html',
  styleUrls: ['./file-read-append.component.scss']
})
export class FileReadAppendComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
