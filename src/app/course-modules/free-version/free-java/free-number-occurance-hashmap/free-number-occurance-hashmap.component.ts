import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-number-occurance-hashmap',
  templateUrl: './free-number-occurance-hashmap.component.html',
  styleUrls: ['./free-number-occurance-hashmap.component.scss']
})
export class FreeNumberOccuranceHashmapComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) { 
    this.elementId = "one"; 
    this.audioData = mediaDataJava.mediaData.Free_Java.Number_Occurence.audio;
    this.videoData = mediaDataJava.mediaData.Free_Java.Number_Occurence.video;
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
