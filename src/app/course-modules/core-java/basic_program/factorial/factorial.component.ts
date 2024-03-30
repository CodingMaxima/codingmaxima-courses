import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.scss']
})
export class FactorialComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap : MediaCoreJavaMapData) {
     this.elementId = "one";
     this.audioData = mediamap.mediaData.Basic_Problems.Factorial.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Factorial.video; 
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
