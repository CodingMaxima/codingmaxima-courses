import { Component } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-guessing-number',
  templateUrl: './guessing-number.component.html',
  styleUrls: ['./guessing-number.component.scss']
})
export class GuessingNumberComponent {
  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
    this.elementId = 'one';
    this.audioData = mediamap.mediaData.Functions.Projects.Guess_Number.audio;
    this.videoData = mediamap.mediaData.Functions.Projects.Guess_Number.video;
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
