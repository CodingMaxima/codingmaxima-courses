import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-prime-number',
  templateUrl: './free-prime-number.component.html',
  styleUrls: ['./free-prime-number.component.scss']
})
export class FreePrimeNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) { 
    this.elementId = "one";
    this.audioData = mediaDataJava.mediaData.Free_Java.Prime_Number.audio;
    this.videoData = mediaDataJava.mediaData.Free_Java.Prime_Number.video;
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
