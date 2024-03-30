import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-js-reverse-of-number',
  templateUrl: './free-js-reverse-of-number.component.html',
  styleUrls: ['./free-js-reverse-of-number.component.scss']
})
export class FreeJsReverseOfNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Free_Java_Script.Reverse_Of_Number.audio;
     this.videoData = mediamap.mediaData.Free_Java_Script.Reverse_Of_Number.video;
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
