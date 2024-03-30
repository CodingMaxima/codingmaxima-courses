import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeconstraints',
  templateUrl: './employeeconstraints.component.html',
  styleUrls: ['./employeeconstraints.component.scss']
})
export class EmployeeconstraintsComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  elementId: string;

  constructor() {
    this.elementId = "one";
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
  }

  ngOnInit(): void {
  }

  answer() {

    if (this.buttonValue == "Show Answer") {
      this.buttonValue = "Hide Answer";
      this.toggleOn = true;
    } else {
      this.buttonValue = "Show Answer";
      this.toggleOn = false;
    }
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}