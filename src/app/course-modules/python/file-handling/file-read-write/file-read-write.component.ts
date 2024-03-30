import { Component } from '@angular/core';

@Component({
  selector: 'app-file-read-write',
  templateUrl: './file-read-write.component.html',
  styleUrls: ['./file-read-write.component.scss']
})
export class FileReadWriteComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
