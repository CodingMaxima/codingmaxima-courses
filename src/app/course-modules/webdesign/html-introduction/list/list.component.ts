import { Component, OnInit } from '@angular/core';
import { MediaWebDevelopmentMapData } from '../../media-map-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  elementId: string;
  elementId2: string;
  audioData : any;
  videoData : any;

  constructor(mediadata:MediaWebDevelopmentMapData) {
    this.elementId = "one";
    this.elementId2 = "introduction";
    this.audioData = mediadata.mediaData.HTML_Introduction.Lists.Lists.audio;
    this.videoData = mediadata.mediaData.HTML_Introduction.Lists.Lists.video;

  }

  ngOnInit(): void {
  }
  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  tabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }

}
