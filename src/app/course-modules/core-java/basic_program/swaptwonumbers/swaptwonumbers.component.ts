import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-swaptwonumbers',
  templateUrl: './swaptwonumbers.component.html',
  styleUrls: ['./swaptwonumbers.component.scss']
})
export class SwaptwonumbersComponent implements OnInit {
  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Basic_Problems.Swap_of_Two_Numbers.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Swap_of_Two_Numbers.video;
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
