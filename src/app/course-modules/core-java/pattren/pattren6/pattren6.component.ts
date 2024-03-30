import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-pattren6',
  templateUrl: './pattren6.component.html',
  styleUrls: ['./pattren6.component.scss']
})
export class Pattren6Component implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one";
     this.audioData = mediamap.mediaData.Patterns.Pattern_6.audio;
     this.videoData = mediamap.mediaData.Patterns.Pattern_6.video; 
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
