import { Component } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-py-number-occurance',
  templateUrl: './free-py-number-occurance.component.html',
  styleUrls: ['./free-py-number-occurance.component.scss']
})
export class FreePyNumberOccuranceComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Free_Python.Number_Occurance.audio;
     this.videoData = mediamap.mediaData.Free_Python.Number_Occurance.video;
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
