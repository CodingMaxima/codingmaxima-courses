import { Component } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-py-key-occurance-in-array',
  templateUrl: './free-py-key-occurance-in-array.component.html',
  styleUrls: ['./free-py-key-occurance-in-array.component.scss']
})
export class FreePyKeyOccuranceInArrayComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Free_Python.Key_Occurance_in_array.audio;
     this.videoData = mediamap.mediaData.Free_Python.Key_Occurance_in_array.video;
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
