import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-even-or-odd',
  templateUrl: './free-even-or-odd.component.html',
  styleUrls: ['./free-even-or-odd.component.scss']
})
export class FreeEvenOrOddComponent implements OnInit {
  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) { 
    this.elementId = "one"; 
    this.audioData = mediaDataJava.mediaData.Free_Java.Even_Odd.audio;
    this.videoData = mediaDataJava.mediaData.Free_Java.Even_Odd.video;
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
