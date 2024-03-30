import { Component } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-js-kg-pound-project',
  templateUrl: './free-js-kg-pound-project.component.html',
  styleUrls: ['./free-js-kg-pound-project.component.scss']
})
export class FreeJsKgPoundProjectComponent {
  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
    this.elementId = 'one';
    this.audioData = mediamap.mediaData.Free_Java_Script.Kg_Pound.audio;
    this.videoData = mediamap.mediaData.Free_Java_Script.Kg_Pound.video;
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
