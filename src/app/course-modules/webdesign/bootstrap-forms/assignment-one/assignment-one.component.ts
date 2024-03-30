import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.scss']
})
export class AssignmentOneComponent implements OnInit {

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
