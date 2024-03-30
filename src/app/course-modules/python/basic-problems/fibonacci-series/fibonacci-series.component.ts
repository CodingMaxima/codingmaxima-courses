import { Component, OnInit } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-fibonacci-series',
  templateUrl: './fibonacci-series.component.html',
  styleUrls: ['./fibonacci-series.component.scss']
})
export class FibonacciSeriesComponent implements OnInit {

  
  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Basic_Problems.Fibonacci.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Fibonacci.video;
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
