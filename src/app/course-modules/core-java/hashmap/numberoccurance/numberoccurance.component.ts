import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-numberoccurance',
  templateUrl: './numberoccurance.component.html',
  styleUrls: ['./numberoccurance.component.scss']
})
export class NumberoccuranceComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one";
     this.audioData = mediamap.mediaData.Hashmap.Number_Occurrence.audio;
     this.videoData = mediamap.mediaData.Hashmap.Number_Occurrence.video; 
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
