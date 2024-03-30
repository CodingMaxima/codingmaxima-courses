import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.scss'],
})
export class StringsComponent implements OnInit {
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
