import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-duplicate-char',
  templateUrl: './duplicate-char.component.html',
  styleUrls: ['./duplicate-char.component.scss']
})
export class DuplicateCharComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Duplicate_Character.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Duplicate_Character.video;
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
