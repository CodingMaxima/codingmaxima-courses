import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-collegebranch',
  templateUrl: './collegebranch.component.html',
  styleUrls: ['./collegebranch.component.scss']
})
export class CollegebranchComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Classes_Relations.College_Branch.audio;
     this.videoData = mediamap.mediaData.Classes_Relations.College_Branch.video;
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
