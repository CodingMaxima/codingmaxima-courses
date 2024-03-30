import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-frequency-tuple',
  templateUrl: './frequency-tuple.component.html',
  styleUrls: ['./frequency-tuple.component.scss']
})
export class FrequencyTupleComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Number_Frequency.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Number_Frequency.video;
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
