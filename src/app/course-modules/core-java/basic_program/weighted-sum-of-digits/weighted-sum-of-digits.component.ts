import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-weighted-sum-of-digits',
  templateUrl: './weighted-sum-of-digits.component.html',
  styleUrls: ['./weighted-sum-of-digits.component.scss']
})
export class WeightedSumOfDigitsComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) { 
    this.elementId = "one"; 
    this.audioData = mediamap.mediaData.Basic_Problems.Weighted_Sum_of_Digits.audio;
    this.videoData = mediamap.mediaData.Basic_Problems.Weighted_Sum_of_Digits.video;
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
