import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication-decorator',
  templateUrl: './authentication-decorator.component.html',
  styleUrls: ['./authentication-decorator.component.scss']
})
export class AuthenticationDecoratorComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}
