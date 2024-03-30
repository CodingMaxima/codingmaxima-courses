import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java8',
  templateUrl: './java8.component.html',
  styleUrls: ['./java8.component.scss']
})
export class Java8Component implements OnInit {

  elementId: string;
  elementId2: string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "introduction";
  }
  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
    this.elementId2 = "introduction";
  }
  tabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number) {

    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }

}
