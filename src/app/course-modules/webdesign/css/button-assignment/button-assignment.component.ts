import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-assignment',
  templateUrl: './button-assignment.component.html',
  styleUrls: ['./button-assignment.component.scss']
})
export class ButtonAssignmentComponent implements OnInit {

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
