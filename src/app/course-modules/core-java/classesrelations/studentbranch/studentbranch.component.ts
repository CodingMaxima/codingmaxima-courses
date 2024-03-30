import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-studentbranch',
  templateUrl: './studentbranch.component.html',
  styleUrls: ['./studentbranch.component.scss']
})
export class StudentbranchComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Classes_Relations.Student_Branch.audio;
     this.videoData = mediamap.mediaData.Classes_Relations.Student_Branch.video;
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
