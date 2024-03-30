import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-duplicatechars',
  templateUrl: './duplicatechars.component.html',
  styleUrls: ['./duplicatechars.component.scss']
})
export class DuplicatecharsComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one";
     this.audioData = mediamap.mediaData.Hashmap.Duplicate_Characters.audio;
     this.videoData = mediamap.mediaData.Hashmap.Duplicate_Characters.video;
      
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
