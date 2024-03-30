import { Component, OnInit } from '@angular/core';
import { MediaWebDevelopmentMapData } from '../../media-map-data';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  
  elementId: string;
  elementId2: string;
  audioData:any;
  videoData:any;

  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
   
  }
  tabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
   
  }

  constructor(mediamapdata:MediaWebDevelopmentMapData) {
    this.elementId = "one";
    this.elementId2 = "assignment1";
    this.audioData = mediamapdata.mediaData.HTML_Introduction.Lists.Tables.audio;
    this.videoData = mediamapdata.mediaData.HTML_Introduction.Lists.Tables.video;
  }

  ngOnInit(): void {
  }
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}
