import { Component, OnInit } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-py-pattern-eight',
  templateUrl: './py-pattern-eight.component.html',
  styleUrls: ['./py-pattern-eight.component.scss']
})
export class PyPatternEightComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Patterns.Pattern8.audio;
     this.videoData = mediamap.mediaData.Patterns.Pattern8.video;
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
