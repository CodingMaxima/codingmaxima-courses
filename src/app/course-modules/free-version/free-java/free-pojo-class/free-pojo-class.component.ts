import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-pojo-class',
  templateUrl: './free-pojo-class.component.html',
  styleUrls: ['./free-pojo-class.component.scss']
})
export class FreePojoClassComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediaDataJava.mediaData.Free_Java.Pojo_Class.audio;
     this.videoData = mediaDataJava.mediaData.Free_Java.Pojo_Class.video;
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
