import { Component } from '@angular/core';

@Component({
  selector: 'app-debug-with-vscode',
  templateUrl: './debug-with-vscode.component.html',
  styleUrls: ['./debug-with-vscode.component.scss']
})
export class DebugWithVscodeComponent {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}
