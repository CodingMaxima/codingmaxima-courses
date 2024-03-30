import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-pattren8',
  templateUrl: './pattren8.component.html',
  styleUrls: ['./pattren8.component.scss']
})
export class Pattren8Component implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(medaimap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = medaimap.mediaData.Patterns.Pattern_8.audio;
     this.videoData = medaimap.mediaData.Patterns.Pattern_8.video;
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
