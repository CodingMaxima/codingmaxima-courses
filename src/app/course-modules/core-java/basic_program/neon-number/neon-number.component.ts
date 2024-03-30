import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-neon-number',
  templateUrl: './neon-number.component.html',
  styleUrls: ['./neon-number.component.scss']
})
export class NeonNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(medaimap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = medaimap.mediaData.Basic_Problems.Neon_Number.audio;
     this.videoData = medaimap.mediaData.Basic_Problems.Neon_Number.video;
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
