import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-thread-communication',
  templateUrl: './inter-thread-communication.component.html',
  styleUrls: ['./inter-thread-communication.component.scss']
})
export class InterThreadCommunicationComponent implements OnInit {

  
  elementId: string;

  constructor() {
    this.elementId = "one";
   
  }
  ngOnInit(): void {
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  setVideoSpeed(speed: number) {

    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }
}
