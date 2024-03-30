import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-sort-array',
  templateUrl: './sort-array.component.html',
  styleUrls: ['./sort-array.component.scss']
})
export class SortArrayComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Sorting_Array.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Sorting_Array.video;
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
