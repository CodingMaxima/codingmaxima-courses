import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-vowel-count',
  templateUrl: './free-vowel-count.component.html',
  styleUrls: ['./free-vowel-count.component.scss']
})
export class FreeVowelCountComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) { 
    this.elementId = "one"; 
    this.audioData = mediaDataJava.mediaData.Free_Java.Vowel_Count.audio;
    this.videoData = mediaDataJava.mediaData.Free_Java.Vowel_Count.video;
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
