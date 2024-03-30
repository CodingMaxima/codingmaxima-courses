import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-uniquenumbersum',
  templateUrl: './uniquenumbersum.component.html',
  styleUrls: ['./uniquenumbersum.component.scss']
})
export class UniquenumbersumComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Hashmap.Unique_Numbers_Sum.audio;
     this.videoData = mediamap.mediaData.Hashmap.Unique_Numbers_Sum.video;
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
