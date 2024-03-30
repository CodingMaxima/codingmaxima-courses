import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-longest-string',
  templateUrl: './longest-string.component.html',
  styleUrls: ['./longest-string.component.scss']
})
export class LongestStringComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Longest_String.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Longest_String.video;
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
