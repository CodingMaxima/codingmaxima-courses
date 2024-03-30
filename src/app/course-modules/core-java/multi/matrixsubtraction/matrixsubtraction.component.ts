import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-matrixsubtraction',
  templateUrl: './matrixsubtraction.component.html',
  styleUrls: ['./matrixsubtraction.component.scss']
})
export class MatrixsubtractionComponent implements OnInit {

  elementId: string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
    this.elementId = "one";
    this.audioData = mediamap.mediaData.Multi_Dimension_Arrays_Collection.Matrix_Subtraction.audio;
    this.videoData = mediamap.mediaData.Multi_Dimension_Arrays_Collection.Matrix_Subtraction.video;
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
