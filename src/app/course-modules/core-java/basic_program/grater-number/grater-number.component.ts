import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-grater-number',
  templateUrl: './grater-number.component.html',
  styleUrls: ['./grater-number.component.scss']
})
export class GraterNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap: MediaCoreJavaMapData) { 
    this.elementId = "one";
    this.audioData = mediamap.mediaData.Basic_Problems.Greater_number.audio;
    this.videoData = mediamap.mediaData.Basic_Problems.Greater_number.video;  
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
