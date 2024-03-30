import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-diognalsum',
  templateUrl: './diognalsum.component.html',
  styleUrls: ['./diognalsum.component.scss']
})
export class DiognalsumComponent implements OnInit {

  elementId: string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
    this.elementId = "one";
    this.audioData = mediamap.mediaData.Multi_Dimension_Arrays_Collection.Diagonal_Sum_of_Matrix.audio;
    this.videoData = mediamap.mediaData.Multi_Dimension_Arrays_Collection.Diagonal_Sum_of_Matrix.video;
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
