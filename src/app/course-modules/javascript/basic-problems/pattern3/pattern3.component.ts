import { Component, OnInit } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-pattern3',
  templateUrl: './pattern3.component.html',
  styleUrls: ['./pattern3.component.scss']
})
export class Pattern3Component implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Basic_Problems.Pattern3.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Pattern3.video;
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
