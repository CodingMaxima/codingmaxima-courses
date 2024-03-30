import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-stringpool',
  templateUrl: './stringpool.component.html',
  styleUrls: ['./stringpool.component.scss']
})
export class StringpoolComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  
  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Strings.String_Pool_Memory.audio;
     this.videoData = mediamap.mediaData.Strings.String_Pool_Memory.video;
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
