import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-fibinocci-series',
  templateUrl: './fibinocci-series.component.html',
  styleUrls: ['./fibinocci-series.component.scss']
})
export class FibinocciSeriesComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaCoreJavaMapData) { 
    this.elementId = "one"; 
    this.audioData = mediamap.mediaData.Basic_Problems.Fibonacci_Series.audio;
    this.videoData = mediamap.mediaData.Basic_Problems.Fibonacci_Series.video;
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
