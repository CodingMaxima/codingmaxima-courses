import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-specialstring',
  templateUrl: './specialstring.component.html',
  styleUrls: ['./specialstring.component.scss']
})
export class SpecialstringComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) { 
    this.elementId = "one"; 
    this.audioData = mediamap.mediaData.Strings.Special_String.audio;
    this.videoData = mediamap.mediaData.Strings.Special_String.video;
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
