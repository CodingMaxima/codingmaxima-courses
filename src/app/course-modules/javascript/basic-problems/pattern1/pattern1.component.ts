import { Component, OnInit } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-pattern1',
  templateUrl: './pattern1.component.html',
  styleUrls: ['./pattern1.component.scss']
})
export class Pattern1Component implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Basic_Problems.Pattern1.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Pattern1.video;
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
