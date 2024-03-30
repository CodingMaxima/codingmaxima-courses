import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-tuples-elements',
  templateUrl: './tuples-elements.component.html',
  styleUrls: ['./tuples-elements.component.scss']
})
export class TuplesElementsComponent {
  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.List_Tuple_Set_Dictionary.Different_ways.audio;
     this.videoData = mediamap.mediaData.List_Tuple_Set_Dictionary.Different_ways.video;
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
