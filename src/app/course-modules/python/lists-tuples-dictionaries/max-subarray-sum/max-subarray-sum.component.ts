import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-max-subarray-sum',
  templateUrl: './max-subarray-sum.component.html',
  styleUrls: ['./max-subarray-sum.component.scss']
})
export class MaxSubarraySumComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Max_Subarray_Sum.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Max_Subarray_Sum.video;
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
