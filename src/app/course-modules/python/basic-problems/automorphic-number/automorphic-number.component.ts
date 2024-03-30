import { Component, OnInit } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-automorphic-number',
  templateUrl: './automorphic-number.component.html',
  styleUrls: ['./automorphic-number.component.scss']
})
export class AutomorphicNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one";
     this.audioData = mediamap.mediaData.Basic_Problems.Automorphic.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Automorphic.video; 
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
