import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-login-assignment',
  templateUrl: './forms-login-assignment.component.html',
  styleUrls: ['./forms-login-assignment.component.scss']
})
export class FormsLoginAssignmentComponent implements OnInit {

  elementId:string;

  constructor() {
    this.elementId ="one";
 }
 tabChange(event: Event) {
  this.elementId = (event.target as Element).id;
}
  ngOnInit(): void {
  }
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}
