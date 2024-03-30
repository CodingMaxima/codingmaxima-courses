import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-pattren2',
  templateUrl: './pattren2.component.html',
  styleUrls: ['./pattren2.component.scss']
})
export class Pattren2Component implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(medaimap:MediaCoreJavaMapData) {
     this.elementId = "one";
     this.audioData = medaimap.mediaData.Patterns.Pattern_2.audio;
     this.videoData = medaimap.mediaData.Patterns.Pattern_2.video; 
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
