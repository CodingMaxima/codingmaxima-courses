import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit{
  elementId: string;
  constructor() {
    this.elementId = 'one';
  }
  ngOnInit(): void {}

  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}
