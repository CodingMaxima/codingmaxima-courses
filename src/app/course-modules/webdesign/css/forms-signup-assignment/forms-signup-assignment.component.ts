import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-signup-assignment',
  templateUrl: './forms-signup-assignment.component.html',
  styleUrls: ['./forms-signup-assignment.component.scss']
})
export class FormsSignupAssignmentComponent implements OnInit {

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
