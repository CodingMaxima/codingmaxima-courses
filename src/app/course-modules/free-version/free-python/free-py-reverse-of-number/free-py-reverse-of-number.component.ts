import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-py-reverse-of-number',
  templateUrl: './free-py-reverse-of-number.component.html',
  styleUrls: ['./free-py-reverse-of-number.component.scss']
})
export class FreePyReverseOfNumberComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Free_Python.Reverse_of_Number.audio;
     this.videoData = mediamap.mediaData.Free_Python.Reverse_of_Number.video;
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
