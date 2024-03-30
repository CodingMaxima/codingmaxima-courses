import { Component, OnInit } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-pattern2',
  templateUrl: './pattern2.component.html',
  styleUrls: ['./pattern2.component.scss']
})
export class Pattern2Component implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Basic_Problems.Pattern2.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Pattern2.video;
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
