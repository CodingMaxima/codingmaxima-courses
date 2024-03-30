import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-designation',
  templateUrl: './employee-designation.component.html',
  styleUrls: ['./employee-designation.component.scss']
})
export class EmployeeDesignationComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  JsonData: any;

  elementId: string;
  elementId2: string;

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
  }
  mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
  constructor() {
    this.elementId2 = "one";
    this.elementId = "question1";
  }

  ngOnInit(): void {
  }

  answerChange() {

    if (this.buttonValue == "Show Answer") {
      this.buttonValue = "Hide Answer";
      this.toggleOn = true;
    } else {
      this.buttonValue = "Show Answer";
      this.toggleOn = false;
    }
  }

  getSplitDataHeader(data: string): string[] {
    var array = data.split(",");
    return array;
  }

  getSplitDataRows(row: string, data: string[]): string[] {
    if (row != data[0]) {
      var array = row.split(",");
      return array;
    }
    else {
      return [];
    }
  }


}
