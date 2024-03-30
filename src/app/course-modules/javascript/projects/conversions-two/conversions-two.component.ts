import { Component } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-conversions-two',
  templateUrl: './conversions-two.component.html',
  styleUrls: ['./conversions-two.component.scss']
})
export class ConversionsTwoComponent {
  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
    this.elementId = 'one';
    this.audioData = mediamap.mediaData.Functions.Projects.cm_feet_inch.audio;
    this.videoData = mediamap.mediaData.Functions.Projects.cm_feet_inch.video;
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
