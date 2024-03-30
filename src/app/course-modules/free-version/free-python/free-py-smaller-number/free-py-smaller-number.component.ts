import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-py-smaller-number',
  templateUrl: './free-py-smaller-number.component.html',
  styleUrls: ['./free-py-smaller-number.component.scss']
})
export class FreePySmallerNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Free_Python.Smalller_Number.audio;
     this.videoData = mediamap.mediaData.Free_Python.Smalller_Number.video;
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
