import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-findkeypositions',
  templateUrl: './findkeypositions.component.html',
  styleUrls: ['./findkeypositions.component.scss']
})
export class FindkeypositionsComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one";
     this.audioData = mediamap.mediaData.Arrays.Find_Key_Positions.audio;
     this.videoData = mediamap.mediaData.Arrays.Find_Key_Positions.video;
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
