import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-reverse-number',
  templateUrl: './free-reverse-number.component.html',
  styleUrls: ['./free-reverse-number.component.scss']
})
export class FreeReverseNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) { 
    this.elementId = "one"; 
    this.audioData = mediaDataJava.mediaData.Free_Java.Reverse_Number.audio;
    this.videoData = mediaDataJava.mediaData.Free_Java.Reverse_Number.video;
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
