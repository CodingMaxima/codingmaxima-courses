import { Component } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-js-random-quote-project',
  templateUrl: './free-js-random-quote-project.component.html',
  styleUrls: ['./free-js-random-quote-project.component.scss']
})
export class FreeJsRandomQuoteProjectComponent {
  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
    this.elementId = 'one';
    this.audioData = mediamap.mediaData.Free_Java_Script.Random_Quote.audio;
    this.videoData = mediamap.mediaData.Free_Java_Script.Random_Quote.video;
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
