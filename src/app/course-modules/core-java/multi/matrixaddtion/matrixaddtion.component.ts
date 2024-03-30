import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-matrixaddtion',
  templateUrl: './matrixaddtion.component.html',
  styleUrls: ['./matrixaddtion.component.scss']
})
export class MatrixaddtionComponent implements OnInit {

  elementId: string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
    this.elementId = "one";
    this.audioData = mediamap.mediaData.Multi_Dimension_Arrays_Collection.Matrix_addition.audio;
    this.videoData = mediamap.mediaData.Multi_Dimension_Arrays_Collection.Matrix_addition.video;
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
