import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-superarray',
  templateUrl: './superarray.component.html',
  styleUrls: ['./superarray.component.scss']
})
export class SuperarrayComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Arrays.Super_Array.audio;
     this.videoData = mediamap.mediaData.Arrays.Super_Array.video;
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
