import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-py-even-or-odd',
  templateUrl: './free-py-even-or-odd.component.html',
  styleUrls: ['./free-py-even-or-odd.component.scss']
})
export class FreePyEvenOrOddComponent implements OnInit {
  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediadata:MediaFreeVersionMapData) { 
    this.elementId = "one"; 
    this.audioData = mediadata.mediaData.Free_Python.Even_Odd.audio;
    this.videoData = mediadata.mediaData.Free_Python.Even_Odd.video;
  
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
