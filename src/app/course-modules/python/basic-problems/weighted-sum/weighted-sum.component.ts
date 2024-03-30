import { Component, OnInit } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-weighted-sum',
  templateUrl: './weighted-sum.component.html',
  styleUrls: ['./weighted-sum.component.scss']
})
export class WeightedSumComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Basic_Problems.Weighted_Sum.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Weighted_Sum.video;
    }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number){
  
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }

}
