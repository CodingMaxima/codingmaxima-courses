import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-string-poolmemory',
  templateUrl: './free-string-poolmemory.component.html',
  styleUrls: ['./free-string-poolmemory.component.scss']
})
export class FreeStringPoolmemoryComponent implements OnInit {
  
  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediaDataJava.mediaData.Free_Java.String_Pool_Memory.audio;
     this.videoData = mediaDataJava.mediaData.Free_Java.String_Pool_Memory.video;
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
