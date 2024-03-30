import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-evenoddmethod',
  templateUrl: './evenoddmethod.component.html',
  styleUrls: ['./evenoddmethod.component.scss']
})
export class EvenoddmethodComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Methods.Even_Odd_Method.audio;
     this.videoData = mediamap.mediaData.Methods.Even_Odd_Method.video;

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
