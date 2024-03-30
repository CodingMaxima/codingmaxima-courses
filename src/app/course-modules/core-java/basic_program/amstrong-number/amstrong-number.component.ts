import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-amstrong-number',
  templateUrl: './amstrong-number.component.html',
  styleUrls: ['./amstrong-number.component.scss']
})
export class AmstrongNumberComponent implements OnInit {

  elementId:string;
  audioData : any;
  videoData : any;
  constructor(mediamap: MediaCoreJavaMapData) { 
    this.elementId = "one";
    this.audioData = mediamap.mediaData.Basic_Problems.Armstrong_Number.audio;
    this.videoData = mediamap.mediaData.Basic_Problems.Armstrong_Number.video;

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
