import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-pattern3',
  templateUrl: './free-pattern3.component.html',
  styleUrls: ['./free-pattern3.component.scss']
})
export class FreePattern3Component implements OnInit {
  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) { 
    this.elementId = "one";
    this.audioData = mediaDataJava.mediaData.Free_Java.Pattern3.audio;
    this.videoData = mediaDataJava.mediaData.Free_Java.Pattern3.video;
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
