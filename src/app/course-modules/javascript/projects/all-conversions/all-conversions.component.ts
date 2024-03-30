import { Component } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-all-conversions',
  templateUrl: './all-conversions.component.html',
  styleUrls: ['./all-conversions.component.scss']
})
export class AllConversionsComponent {
  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
    this.elementId = 'one';
    this.audioData = mediamap.mediaData.Functions.Projects.Conversions_Advance.audio;
    this.videoData = mediamap.mediaData.Functions.Projects.Conversions_Advance.video;
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
