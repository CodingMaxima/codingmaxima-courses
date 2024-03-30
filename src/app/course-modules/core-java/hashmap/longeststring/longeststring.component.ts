import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-longeststring',
  templateUrl: './longeststring.component.html',
  styleUrls: ['./longeststring.component.scss']
})
export class LongeststringComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one";
     this.audioData = mediamap.mediaData.Hashmap.Longest_String.audio;
     this.videoData = mediamap.mediaData.Hashmap.Longest_String.video; 
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
