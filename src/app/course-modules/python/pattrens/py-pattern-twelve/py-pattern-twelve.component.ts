import { Component, OnInit } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-py-pattern-twelve',
  templateUrl: './py-pattern-twelve.component.html',
  styleUrls: ['./py-pattern-twelve.component.scss']
})
export class PyPatternTwelveComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Patterns.Pattern12.audio;
     this.videoData = mediamap.mediaData.Patterns.Pattern12.video;
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
