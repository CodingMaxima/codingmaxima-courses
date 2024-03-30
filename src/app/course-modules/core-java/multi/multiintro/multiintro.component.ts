import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-multiintro',
  templateUrl: './multiintro.component.html',
  styleUrls: ['./multiintro.component.scss']
})
export class MultiintroComponent implements OnInit {

  elementId: string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
    this.elementId = "one";
    this.audioData = mediamap.mediaData.Multi_Dimension_Arrays_Collection.Multidimension_Array_Introduction.audio;
    this.videoData = mediamap.mediaData.Multi_Dimension_Arrays_Collection.Multidimension_Array_Introduction.video;
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
