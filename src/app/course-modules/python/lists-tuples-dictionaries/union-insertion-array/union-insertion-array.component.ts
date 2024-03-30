import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-union-insertion-array',
  templateUrl: './union-insertion-array.component.html',
  styleUrls: ['./union-insertion-array.component.scss']
})
export class UnionInsertionArrayComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Union_Interaction.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Union_Interaction.video;
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
