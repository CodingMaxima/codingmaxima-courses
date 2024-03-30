import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-each-nooccurance',
  templateUrl: './each-nooccurance.component.html',
  styleUrls: ['./each-nooccurance.component.scss']
})
export class EachNooccuranceComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Number_Occurence.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Number_Occurence.video;
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
