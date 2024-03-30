import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-class-object',
  templateUrl: './free-class-object.component.html',
  styleUrls: ['./free-class-object.component.scss']
})
export class FreeClassObjectComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) {
     this.elementId = "one";
     this.audioData = mediaDataJava.mediaData.Free_Java.Class_Object.audio;
     this.videoData = mediaDataJava.mediaData.Free_Java.Class_Object.video; 
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
