import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syncronization',
  templateUrl: './syncronization.component.html',
  styleUrls: ['./syncronization.component.scss']
})
export class SyncronizationComponent implements OnInit {

  elementId: string;
  elementId2: string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "first";
  }
  ngOnInit(): void {
  }
  subTabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  setVideoSpeed(speed: number) {

    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }

}
