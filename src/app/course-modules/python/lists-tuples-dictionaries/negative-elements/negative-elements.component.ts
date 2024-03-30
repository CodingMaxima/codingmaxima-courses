import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-negative-elements',
  templateUrl: './negative-elements.component.html',
  styleUrls: ['./negative-elements.component.scss']
})
export class NegativeElementsComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Moving_Negative_Elements.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Moving_Negative_Elements.video;
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
