import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-spy-number',
  templateUrl: './spy-number.component.html',
  styleUrls: ['./spy-number.component.scss']
})
export class SpyNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap : MediaCoreJavaMapData) { 
    this.audioData = mediamap.mediaData.Basic_Problems.Spy_Number.audio;
    this.videoData = mediamap.mediaData.Basic_Problems.Spy_Number.video;
    this.elementId = "one"; 
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
