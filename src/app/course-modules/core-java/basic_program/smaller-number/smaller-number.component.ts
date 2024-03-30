import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-smaller-number',
  templateUrl: './smaller-number.component.html',
  styleUrls: ['./smaller-number.component.scss']
})
export class SmallerNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap : MediaCoreJavaMapData) { 
    this.audioData = mediamap.mediaData.Basic_Problems.Smaller_Number.audio;
    this.videoData = mediamap.mediaData.Basic_Problems.Smaller_Number.video;
    this.elementId = "one"; 
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
