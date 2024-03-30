import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-maxofarray',
  templateUrl: './maxofarray.component.html',
  styleUrls: ['./maxofarray.component.scss']
})
export class MaxofarrayComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Arrays.Max_of_Array.audio;
     this.videoData = mediamap.mediaData.Arrays.Max_of_Array.video;
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
