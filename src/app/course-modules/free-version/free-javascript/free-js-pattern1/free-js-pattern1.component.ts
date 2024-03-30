import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-js-pattern1',
  templateUrl: './free-js-pattern1.component.html',
  styleUrls: ['./free-js-pattern1.component.scss']
})
export class FreeJsPattern1Component implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Free_Java_Script.Pattern_1.audio;
     this.videoData = mediamap.mediaData.Free_Java_Script.Pattern_1.video;
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
