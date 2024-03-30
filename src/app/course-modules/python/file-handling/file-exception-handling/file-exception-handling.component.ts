import { Component } from '@angular/core';

@Component({
  selector: 'app-file-exception-handling',
  templateUrl: './file-exception-handling.component.html',
  styleUrls: ['./file-exception-handling.component.scss']
})
export class FileExceptionHandlingComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
