import { Component, OnInit } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-reverse-number',
  templateUrl: './reverse-number.component.html',
  styleUrls: ['./reverse-number.component.scss']
})
export class ReverseNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Basic_Problems.Reverse_Number.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Reverse_Number.video;
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
