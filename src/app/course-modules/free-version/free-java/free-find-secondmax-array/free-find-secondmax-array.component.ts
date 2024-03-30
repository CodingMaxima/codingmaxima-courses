import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-find-secondmax-array',
  templateUrl: './free-find-secondmax-array.component.html',
  styleUrls: ['./free-find-secondmax-array.component.scss']
})
export class FreeFindSecondmaxArrayComponent implements OnInit {
  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) {
    this.elementId = "one";
    this.audioData = mediaDataJava.mediaData.Free_Java.Second_Max.audio;
    this.videoData = mediaDataJava.mediaData.Free_Java.Second_Max.video;
  }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
  setVideoSpeed(speed: number) {

    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }


}
