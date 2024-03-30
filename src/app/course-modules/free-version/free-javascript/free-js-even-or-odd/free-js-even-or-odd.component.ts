import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-js-even-or-odd',
  templateUrl: './free-js-even-or-odd.component.html',
  styleUrls: ['./free-js-even-or-odd.component.scss']
})
export class FreeJsEvenOrOddComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Free_Java_Script.Even_Odd.audio;
     this.videoData = mediamap.mediaData.Free_Java_Script.Even_Odd.video;
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
