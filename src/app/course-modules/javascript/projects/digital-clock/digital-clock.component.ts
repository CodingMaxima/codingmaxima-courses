import { Component } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent {
  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
    this.elementId = 'one';
    this.audioData = mediamap.mediaData.Functions.Projects.Digital_clock.audio;
    this.videoData = mediamap.mediaData.Functions.Projects.Digital_clock.video;
  }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {}

  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}
