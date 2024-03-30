import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-unique-nosum',
  templateUrl: './unique-nosum.component.html',
  styleUrls: ['./unique-nosum.component.scss']
})
export class UniqueNosumComponent {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Unique_Number_Sum.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Unique_Number_Sum.video;
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
