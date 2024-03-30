import { Component } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-kg-pound-conversion',
  templateUrl: './kg-pound-conversion.component.html',
  styleUrls: ['./kg-pound-conversion.component.scss']
})
export class KgPoundConversionComponent {
  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
    this.elementId = 'one';
    this.audioData = mediamap.mediaData.Functions.Projects.kg_Pound.audio;
    this.videoData = mediamap.mediaData.Functions.Projects.kg_Pound.video;
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
